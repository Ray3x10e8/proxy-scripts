//Turn debug mode on by setting debug variable to any non-empty string
//Note that "" is an empty string, and that "0", "1" & "test" are not empty strings.


function FindProxyForURL(url, host)
  {
    var ip = myIpAddress();
    var debug = "";

    if(debug)
    {
        alert("proxy.pac IP=" + ip + "  HOST=" + host + "  URL=" + url);
    }

      // All client PCs on the internal network will have a 10.10.x.x address, check if I have this
     if (shExpMatch(ip, "172.16.*"))
     {
             if(debug)
          {
                 alert("Proxy for " + url);
             }
     return "PROXY 172.16.2.252:3128";
     }

     // If you have a different IP then this isn't the company network
     else 
     {
             if(debug)
          {
      alert("You are not at CompanyName so going direct for " + url);
             } 
            return "DIRECT";
     }

  }