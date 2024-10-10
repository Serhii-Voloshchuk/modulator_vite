let formData = {}

const STORAGE_KEY = 'feedback-form-state'

const form = document.querySelector('.feedback-form')

populateForm()
form.addEventListener('input', handleFormInput)
form.addEventListener('submit', handleFormSubmit )

function handleFormSubmit(event){
  event.preventDefault();

  const email = form.elements.email.value.trim()
const message= form.elements.message.value.trim()
if(!email || !message){
  alert('Fill please all fields')
  return
} else {
  console.log(formData)
}


  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  


}

function handleFormInput(event){
    const value = event.target.value
    const key = event.target.name

    try{
      formData = JSON.parse(localStorage.getItem(STORAGE_KEY))
    } catch (err) {
      console.log(err)
      return;
    }


  if(formData){
    formData[key] = value
  } else {
    formData = {
    [key]: value,
    }
  }

  try {
    localStorage.setItem(STORAGE_KEY, (JSON.stringify(formData)))
  } catch (err) {
    console.log(err)
    return;
  }

}


function populateForm(){
    
  try{
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY))
  } catch(err){
    console.log(err);
    return;
  }

  if(!formData){
    return;
  }

  for(const key in formData){
    form.elements[key].value = formData[key]
  }
}



console.log('Hello')



