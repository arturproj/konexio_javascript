var debug = {
    text : function(obj){     
        if( typeof obj == 'object' || typeof obj == 'array' ){                    
            return JSON.stringify(obj);
        }     
        return obj;
              
    },
    done : function(obj){        
        console.log('\x1b[32m%s\x1b[0m', this.text(obj) );        
    },
    info : function(obj){
        console.log('\x1b[36m%s\x1b[0m', this.text(obj) );        
    },
    error : function(obj){
        console.log('\x1b[31m%s\x1b[0m', this.text(obj) );        
    },
};

module.exports = debug;