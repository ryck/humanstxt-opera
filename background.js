		window.addEventListener( 'load', function(){
			var theButton;
			var ToolbarUIItemProperties = {
					disabled: false,
					title: 'humanstxt',
					icon: 'icons/icon-18.png',
					popup: {
						href: 'popup.html',
						width: 200,
						height: 300
					}
				}
			theButton = opera.contexts.toolbar.createItem(ToolbarUIItemProperties);

    	var tab = opera.extension.tabs.getFocused();
    	var uri = tab.url;

      
      htxt = null;

			var req = new XMLHttpRequest;
			
			req.onreadystatechange = function () {
				if (req.readyState == 4 && req.status == 200) {

          htxt = req.responseText;
          rps = req.getResponseHeader("Content-Type");
          if (htxt.length > 0 && rps.match("text/plain")) {
            theButton.title = htxt;
      			opera.contexts.toolbar.addItem(theButton);
          }         
          } else {
            opera.contexts.toolbar.removeItem(theButton);
          }

				}
			
			req.open('GET', uri + "/humans.txt", true);
			req.send();
						
			
			
		}, false );
