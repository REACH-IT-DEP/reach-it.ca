function formContact()
{
  function formContactSubmit(event)
  {
    event.preventDefault();

    let emailAddress=document.getElementById('content-form-contact-email');
    let emailSubject=document.getElementById('content-form-contact-subject');
    let emailBody=document.getElementById('content-form-contact-body');
    window.location.href = 'mailto:'+ email + '?subject=' + encodeURIComponent(emailSubject) + '&body=' + encodeURIComponent(emailBody);
  }

  document.getElementById('content-form-contact').addEventListener('submit', formContactSubmit);
}
