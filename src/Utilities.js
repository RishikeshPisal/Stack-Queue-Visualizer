
export const handleOverFlowIn = (element) => {
  const element_div = document.getElementsByClassName(`${element}`)[0];
  const container = document.getElementById(`${element}-container`);
  if (element_div.scrollHeight > container.clientHeight )
    container.style.justifyContent = 'flex-start';
  else
    container.style.justifyContent = 'flex-end';
}