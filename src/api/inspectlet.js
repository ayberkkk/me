export default function handler(req, res) {
    res.setHeader("Content-Type", "text/javascript");
    res.status(200).send(`
      (function() {
        window.__insp = window.__insp || [];
        __insp.push(['wid', 484067599]);
        var ldinsp = function(){
          if(typeof window.__inspld != "undefined") return;
          window.__inspld = 1;
          var insp = document.createElement('script');
          insp.type = 'text/javascript';
          insp.async = true;
          insp.id = "inspsync";
          insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=484067599&r=' + Math.floor(new Date().getTime()/3600000);
          var x = document.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(insp, x);
        };
        setTimeout(ldinsp, 0);
      })();
    `);
  }
  