function getUrl()
{
    var extension = window.opera.extension;
    var focusedTab = extension.tabs.getFocused();
    var uri = focusedTab.url;
    opera.postError(uri);    
    return uri;
}
      
      
