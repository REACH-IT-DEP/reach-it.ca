formContact()
{
  function formContactSubmit(event)
  {
    event.preventDefault();

    let emailAddress=document.getElementByID(content-form-contact-email);
    let emailSubject=document.getElementByID(content-form-contact-subject);
    let emailBody=document.getElementByID(content-form-contact-body);
    window.location.href = 'mailto:'+ email + '?subject=' + encodeURIComponent(emailSubject) + '&body=' + encodeURIComponent(emailBody);
  }

  document.getElementById('content-form-contact').addEventListener('submit', formContactSubmit);
}
