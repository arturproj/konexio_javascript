var debug = {
    text : function(obj){   
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
    log : function(obj){
        console.log( this.text(obj) );        
    }
};

module.exports = debug;