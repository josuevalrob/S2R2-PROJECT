import recordingServices from '../services/recordingServices'

const readAndUploadFileAsAudio = (recordingId, query, audioUrl) => {
  const reader = new FileReader();
  reader.readAsDataURL(audioUrl);
  return new Promise((resolve, reject)=>{
    reader.onerror = () => {
      reader.abort()
      reject(new DOMException('Problem parsing file'))
    }
    reader.onload = async () => {
      const base64AudioMessage = reader.result.split(',')[1];

      const formBody = {
        query,
        audio: base64AudioMessage,
      }

      recordingServices.singleAudio(recordingId, formBody)
        .then( response =>{
          resolve(response) //*returned value
        }, err => {
          console.error('Invalid status saving audio message: ' + err.status)
          reject(err)
        }
        )
    };
  })
}
export default readAndUploadFileAsAudio