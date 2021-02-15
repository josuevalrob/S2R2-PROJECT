import { useState, useEffect, useCallback } from "react";

export const fieldsMapper = data => data.labels.map(label => ({
  ...label, value: data.questions[label.key]
}))

export const useForm = ({update, get}) => {

  const [values, setValues] = useState({});
  const [error, setError] = useState('Fetching field forms');
  const [isLoading, setLoader] = useState(false);

  const handleSubmit = (event) => {
    setLoader(true);
    event.preventDefault();
    const questions = values.reduce((ac, cr) => ({...ac, ...{ [cr.key] : cr.value } }), {})
    update(questions)
      .then(response => {
        setValues(fieldsMapper(response));
        setLoader(false);
      })
      .catch(console.error)
  };

  const handleChange = name => (event) => {
    event.persist();
    const index = values.findIndex(x => x.key === name);
    const update = [...values];
    update[index].value = event.type === 'change' && update[index].type === 'multiple'
      ? {...update[index].value, [event.target.name] : event.target.checked}
      : isNaN(Number(event.target.value)) ? event.target.value : Number(event.target.value);

    setValues(update)
  };

  const fetchData = useCallback(async () => {
    setLoader(true);
    const response= await get;
    const fields = fieldsMapper(response);
    if(!fields.length) {
      setError('We can not fetch the field forms')
    } else {
      console.log('fetching')
      setValues(fields);
      setLoader(false);
    }
  }, [get])

  useEffect(()=>{fetchData();}, [fetchData]);

  return {
    handleChange,
    handleSubmit,
    values,
    error,
    isLoading,
  }
};
