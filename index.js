
const  app = new Vue({
    el: '#app',
    mounted: function(){
        fetch  ("https://api.mockaroo.com/api/c12264f0?count=10&key=f1d27b90") 
        

.then(res => res.json())
.then(emails => {
    // vue's emails are set to variable to the array that was fetched
this.emails = emails;
            //then set the Vue's selectedEmail in a website
this.selectedEmail = this.emails[0];
            //isReady to true
this.isReady= true;

})
.catch(err => console.log(err));    
        },
    data: {
        message:"hello vue!",
    emails:[],
        selectedEmail:{},
    view:'inbox',
        isReady: false
        },

    methods: {
           getPic: function(emailObj) {
            return emailObj.picture;
        },
            getalt(emailObj){
            return  `${emailObj.fname} ${emailObj.lname}'s avatar`;
        },
        clickedEmail: function(emailObj){
            this.selectedEmail = emailObj;
        },
        isSelected: function(emailObj){
            return emailObj == this.selectedEmail;
        },
        incomingEmail(){
             fetch  ("https://api.mockaroo.com/api/c12264f0?count=10&key=f1d27b90") 
            
    
    .then(res => res.json())
        .then(emails => {
        this.emails.unshift(emails[0]);
    
  })
  .catch(err => console.log(err));  

        },
    currentView(){
        switch (this.view) {
            case "inbox":
                 return this.emails.filter(email => !email.deleted);
            break;

                   case 'Trash':
               return this.emails.filter(email => !email.deleted);
            break;
                
                

        }
        },
    
        setView(clickedView){
        this.View = clickedView;
        },
            deleteEmail(){
        this.$set(this.selectedEmail,"deleted", true);
        }
        }
}); 