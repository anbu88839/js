const savebutton=document.getElementById('ba');
const retrievebutton=document.getElementById('bb')
const updatejson=document.getElementById('bc')
const deletejson=document.getElementById('bd')
const jsoninput=document.getElementById('place')
const output = document.getElementById('output');


savebutton.addEventListener('click', () => 
    {
      const jsonData = jsoninput.value;
    
        localStorage.setItem('json', JSON.stringify(JSON.parse(jsonData)));
    
        alert('JSON data saved successfully!');
      
    });

    retrievebutton.addEventListener('click',()=>
    {
        const retrievedData=localStorage.getItem('jsonData');
    
if(retrievedData)
{
    output.textContent=JSON.stringify(JSON.parse(retrievedData));

}
else{
output.textContent="no json data found in localStorage";
}
});

updatejson.addEventListener('click',()=>
{
    const jsonData=jsoninput.value;

   

        const parsedData=JSON.parse(jsonData);
        const existingData=localStorage.getItem('jsonData');

        if(existingData)
        {
            localStorage.setItem('jsonData',JSON.stringify(parsedData));
            alert("JSON data updated successfully")
        }
        else{
            alert("No existing JSON data found to update. Please save data first")
        }

   
   

});

deletejson.addEventListener('click',()=>
    {
        const existingData=localStorage.getItem('jsonData');
       console.log(existingData)
        if(existingData){
            localStorage.removeItem('jsonData');
            alert('JSON data deleted successfully!')
        }
        else{
            alert('No JSON data found to delete.')
        }





})









