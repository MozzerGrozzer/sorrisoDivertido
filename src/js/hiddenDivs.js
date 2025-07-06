function showSection(divId) {
      // update divs when add
      const divs = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6'];
      divs.forEach(id => {
        document.getElementById(id).className = 'hidden';
      });
      document.getElementById(divId).className = 'visible';
    }