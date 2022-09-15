
const {PHASE_DEVELOPMENT_SERVER}= require("next/constants")

module.exports = (phase)=> {
 if(phase === PHASE_DEVELOPMENT_SERVER) {  // npm run dev
return {
  env:{
  mongodb_username:"use-your-username",
  mongodb_password:"use-your-password",
  mongodb_clustername:"use-your-clustername",
  mongodb_database:"use-your-database1"
 }
}
 }
 return {
   env:{
  mongodb_username:"use-your-username",
  mongodb_password:"use-your-password",
  mongodb_clustername:"use-your-clustername",
  mongodb_database:"use-your-database2"
 }
 }

}



