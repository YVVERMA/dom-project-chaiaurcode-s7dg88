const insertkey = document.querySelector('#insert');
window.addEventListener('keydown', (e) => {
  insertkey.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  
  </div>
  `;
});
