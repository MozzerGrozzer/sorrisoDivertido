function showSection(divId) {
      // List all your div IDs here
      const divs = ['div1', 'div2', 'div3'];
      divs.forEach(id => {
        document.getElementById(id).className = 'hidden';
      });
      document.getElementById(divId).className = 'visible';
    }