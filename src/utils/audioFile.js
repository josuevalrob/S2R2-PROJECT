import recordingServices from '../services/recordingServices'

const readUploadedFileAsAudio = (id, audioName, audioIds, audioUrl) => {
  const reader = new FileReader();
  reader.readAsDataURL(audioUrl);
  return new Promise((resolve, reject)=>{
    reader.onerror = () => {
      reader.abort()
      reject(new DOMException('Problem parsing file'))
    }
    reader.onload = async () => {
      const base64AudioMessage = reader.result.split(',')[1];
      const audioObj = {audioName, audioIds, audio: base64AudioMessage}
      recordingServices.createAudio(id, audioObj)
        .then( response =>{
          resolve(response) //*returned value
          // populateAudioMessages();
        }, err => {
          debugger
          console.error('Invalid status saving audio message: ' + err.status)
          reject(err)
        }
        )
    };
  })
}

export default readUploadedFileAsAudio