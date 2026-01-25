function formContact()
{
  function formContactSubmit(event)
  {
    event.preventDefault();

    let emailAddress=document.getElementById('content-form-contact-email').value;
    let emailSubject=document.getElementById('content-form-contact-subject').value;
    let emailBody=document.getElementById('content-form-contact-body').value;
    window.location.href = 'mailto:'+ emailAddress + '?subject=' + encodeURIComponent(emailSubject) + '&body=' + encodeURIComponent(emailBody);
  }

  document.getElementById('content-form-contact').addEventListener('submit', formContactSubmit);
}
