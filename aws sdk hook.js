Java.perform(function () {

    var com_amazonaws_auth_BasicSessionCredentials = Java.use('com.amazonaws.auth.BasicSessionCredentials');

    com_amazonaws_auth_BasicSessionCredentials.a.overload().implementation = function(){
        console.log('[*] com_amazonaws_auth_BasicSessionCredentials.a');
        var targetMethod=com_amazonaws_auth_BasicSessionCredentials.a;    
		var retVal=targetMethod.apply(this,arguments);    
		console.log('[31mreturn:[0m [0;32m' + retVal + '[0m' + ', [31mtype:[0m [0;32m' + typeof(retVal) + '[0m');    
		console.log('[-] Exited: com_amazonaws_auth_BasicSessionCredentials.a');    
		return retVal;
    };

    com_amazonaws_auth_BasicSessionCredentials.b.overload().implementation = function(){
        console.log('[*] com_amazonaws_auth_BasicSessionCredentials.b');
        var targetMethod=com_amazonaws_auth_BasicSessionCredentials.b;    
		var retVal=targetMethod.apply(this,arguments);    
		console.log('[31mreturn:[0m [0;32m' + retVal + '[0m' + ', [31mtype:[0m [0;32m' + typeof(retVal) + '[0m');    
		console.log('[-] Exited: com_amazonaws_auth_BasicSessionCredentials.b');    
		return retVal;
    };

    com_amazonaws_auth_BasicSessionCredentials.c.overload().implementation = function(){
        console.log('[*] com_amazonaws_auth_BasicSessionCredentials.c');
        var targetMethod=com_amazonaws_auth_BasicSessionCredentials.c;    
		var retVal=targetMethod.apply(this,arguments);    
		console.log('[31mreturn:[0m [0;32m' + retVal + '[0m' + ', [31mtype:[0m [0;32m' + typeof(retVal) + '[0m');    
		console.log('[-] Exited: com_amazonaws_auth_BasicSessionCredentials.c');    
		return retVal;
    };
	
});