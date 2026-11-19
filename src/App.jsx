
import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login,logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch()
  useEffect(()=>{
    // let active=true
    // const checkAuth=async()=>{
    //   try{
    //     const userData=await authService.getCurrentUser()
    //     if(!active)return 
    //     if(userData){
    //       dispatch(login(userData))
    //     }else{
    //       dispatch(logout())
    //     }
    //   }catch(error){
    //     console.error('Authentication Error:',error)
    //     if(active){
    //       dispatch(logout())
    //     }
    //   }finally{
    //     if(active){
    //       setLoading(false)
    //     }
    //   }
    //   checkAuth()
    //  return ()=>{
    //   active=false
    //  }
    // },([dispatch])
     
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }
    })
    .catch(()=>dispatch(logout()))
    .finally(()=>setLoading(false))
  },[dispatch])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
             TODO:  <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App



// <----------------------MEGA PROJECT STEPS TO START-------------------->

//                             < ----------------============LEARN TODAY (4/11/26)=================--------------------->
// 1. install vite@latest ,then create project with bun install after this
// 2. npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form (inside terminal) to install all this
// 3. check package.JSON TO HAVE ALL THIS dependecies  => delete all App.jsx code and write <h1> hello</h1> to check it work properly
// 4. now create .env,.env.sample file on project root not insidde src folder and write VITE_APPWRITE_URL="test environment"     VITE_APPWRITE_DATABASE_ID="" VITE_APPWRITE_PROJECT_ID=""   VITE_APPWRITE_COLLECTION_ID=""     VITE_APPWRITE_BUCKET_ID=""
// same thing on .env.sample file but remove test environment from first varibale
// 5.  write console.log(import.meta.env.VITE_APPWRITE_URL); in app.jsx to check it works or not befor return part
// 6. inside Appwrite we need to create database,index,collection,bucket,columns,all ids ,appwrite url  steps are write in notes
// 7. then create conf folder inside src and then create conf.js file in conf folder to manage appwrite project settings in a sinlge place  {in hindi => conf folder tumhare Appwrite project ki settings ko ek jagah manage karne ke liye hai. Isse code clean, reusable aur maintainable hota hai}.


//                             <---------------============Learn today(5/11/26)==========-------------->
// 8. create appwrite folder indise src then create auth.js file inside appwrite folder now write
// 9. create account by import conf,account part of appwrite then create class and object export only object so anyone can easily access by object 
// 10. inside class => create login,logout,getCurrentUser,createAccount in trycatch statement by[appwrite account quick start ]
// 11. create config.js file inside appwrite folder to create,update,delete,getpost,getposts post features and also upload,delete,file preview file features using databases,bucket same as auth.js trycattch statement

//                             <--------------=============Learn today(13/11/26)===--------------------->
// 12. today we create store foldder inside src inside this we create two files authSlice.js,store.js
// 13. in authSlice.js we create createSlice which take name,initialstate,reducers andthen export reducer by .actions use and export reducer
// 14. in store.js we create storer only by createStore and inside this only took reducer
// 15. we create header,footer folder inside srrc and name as same as for files with index.js file on header folder inside index.js file we export both header,footer on same place
// 16. in this do not do anything only type rfce to simple code and also install tailwind.css 
// 17. inside app.jsx create use state for loading and useeffect for fetching that user is logimn or not by if else condition and .finally return only the last output then use return as ternary operator 
// 18. now move to main.jsx folder to rap app into provvider by also took store then run 


//                         <-----------------============Learn Today(14/11/26)========------------------->
// 19. now lets open footer.jsx inside this copy paste the footer code of hitesh bhaiya and import only Logo,{Link}
// 20. now create container.jsx inside this to take a normal code and move on header.jsx part
// 21. in header.jsx first import whatever is needed then create authStatus,useNavigate to navigate and create navItem as an array then move to return part first create header now wrap every code in Container inside this first take logo by use link and then all navItems by ul tag and use key for a different name in li after this we need to define authstatus if avialble to do LogoutBtn
// 22. now you need to create logoutBtn,Logo,Input,Button file which is very easy to understand and here we create button,input as separate to use wheerever button or input is needed this is the common code for button,input
// {forward reference } =>  use when we create input filed at one place for multiple purpose such as username,password etc. and then we need to use in login page then we use forward ref



//                          <---------------===========Learn Today(16/11/26)==========-------------------->
// here we learn how react-hook-form work
// 23.first we create Login.jsx inside this we need to navigate this login  by use of useForm() in this we required Link, useNavigate,Logo,Button,Input,useDispatch,authService,useForm,useState inside useForm there register is a event and also a handlesubmit is used as event
// 24. then create login as async function then write setErrror as blank to provide no error then use try and catch and always this as syntax inside them
// 25. write nrml html,css then write javascript for error then crete form and onsubmit always handle handlesubmit what you want to handle such as login(onSubmit={handleSubmit(login)}) then always use ...register and define name as email then use object such as required true,validation ettc.
// 26. SignUp.jsx is same as it is Login.jsx you can practice login.jsx code here properly ad anlyze it
// 27. now we create PostCard which is card here inside this we use Link and here simple write html,css and inside img src={authService.getFilePreview(featuredImage)} now ask chatgpt use of this give funcs child as $id because it alsways as it is ,title,featuredImage
// 28. lets create select.jsx here we give child as label,options,className,...props and after this use ref then create id inside return part you ned to define label as js then write select then options inside this and when export func use forwardRef
// 29. then we create authLayout.jsx which is not clearly understand by me only i can understand this by anaylze it
// regexr for generate your email  as a expression


//                         <---------------------===========Learn today(17/11/26)==========-------------------->
//30. today crreate RTE.jsx inside this we use editor of tinymce website in this use editor or controller inside func you should pass name,lavel,control,defaultValue='' and all depend mainly on control
//31.  then controller take three values name,control,render iniside render give filed as onChange and then write <Editor> area
// 32. Editor take some thing such as initialValue,init and inside iniit it takes initialValue,height,menubar,pluigns,toolbar and atlast use onEditorChange={onChange}
// 33. then we create PostForm.jsx in which we create submit and slugtranform as use of if else statemtnet and you can easily understand if ese staemtnet by reading
// 34. hen we create pages folder inside src here we put AddPost,AllPosts,EditPost,Home,Login,Post,SignUp files
// 35. addpost,login,signup arre simple to develop you only use container and that file
// 36. others such as allpost,editpost,home,post.jsx  have some code it could be understood by reading
// 37. now move to index.js to export every files then move to main.jsx to create router by createbrowser router and provide three things path,element,children and main element take as app and iinside children take every files navigate such as login,signup etc.
//38. then rape reactrouter inside proviuder and give router={router}



//                   <----------------------================Learn Today(19/11/26)==========------------------->
// 39. you need to check auth on appwrite app to check emial you signup in your app