<template>

<div>
      <nav class="navbar navbar-expand-sm bg-light navbar-dark">
            <ul class="navbar-nav">

            <li class="nav-item m-1">
            
                <button type="button"
                class="btn btn-primary m-2 fload-end"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="addClick()">
                recruit Talented Developer
                </button>
            
            </li>
         
          
            </ul>
        </nav>



  <div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>

    <div class="modal-body">
    <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 w-50 bd-highlight">
            <div class="input-group mb-3">
       
                <span class="input-group-text">Company Name </span>
                <input type="text" class="form-control" v-model="CompanyName">
            </div>
             <div class="input-group mb-3">
                <span class="input-group-text">PhoneNumber</span>
                <input type="text" class="form-control" v-model="PhoneNumber">
            </div>
             <div class="input-group mb-3">
                <span class="input-group-text">Phone Number</span>
                <input type="text" class="form-control" v-model="PhoneNumber">
            </div>
             <div class="input-group mb-3">
                <span class="input-group-text">Email</span>
                <input type="email" class="form-control" v-model="Email">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">County</span>
                <select class="form-select" v-model="Department">
        
                    <option v-for="dep in departments"
                    :key="dep.id">
                    {{dep.DepartmentName}}
                    </option>
                </select>
            </div>
             <div class="input-group mb-3">
                <span class="input-group-text">Job Title</span>
                <input type="text" class="form-control" v-model="JobTitle">
            </div>
             <div class="input-group mb-3">
                <span class="input-group-text">Requirements</span>
                <input type="text" class="form-control" v-model="Requirements">
            </div>
               <div class="input-group mb-3">
                <span class="input-group-text">NumberofDevelopers</span>
                <input type="text" class="form-control" v-model="NumberofDevelopers">
            </div>
    
            <div class="input-group mb-3">
                <span class="input-group-text">DOJ</span>
                <input type="date" class="form-control" v-model="DateOfApplication">
            </div>

        </div>
        <div class="p-2 w-50 bd-highlight">
            <img width="250px" height="250px"
                :src="PhotoPath+FileName"/>
            <input class="m-2" type="file" @change="imageUpload">
        </div>
    </div>
    
        <button type="button" @click="createClick()"
        v-if="EmployeeId==0" class="btn btn-primary">
        Create
        </button>
      

    </div>

</div>
</div>
</div>


</div>


    

</template>

<script >
import axios from "axios"
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Home",
    data(){
    return{  
        departments:[],
        recruits:[],
        modalTitle:"",
        RecruiterId:0,
        CompanyName:"",
        PhoneNumber:"",
        Email:"",
        Department:"",
        JobTitle:"",
        Requirements:"",
        NumberofDevelopers:"",
        DateOfApplication:"",
        FileName:"anonymous.png",
        PhotoPath:"http://127.0.0.1:8000/photos/"
    }
},
    methods:{
    refreshData(){
        axios.get("http://127.0.0.1:8000/recruit")
        .then((response)=>{
            this.recruits=response.data;
        });

        axios.get("http://127.0.0.1:8000/department")
        .then((response)=>{
            this.departments=response.data;
        });
    },
    addClick(){
        this.modalTitle="Recruit";
        this.RecruiterId=0;
        this.CompanyName="";
        this.PhoneNumber="";
        this.Email="";
        this.Department="",
        this.JobTitle="",
        this.Requirements="";
        this.NumberofDevelopers="";
        this.DateOfApplication="",
        this.FileName="anonymous.png"
    },
 
    createClick(){
        axios.post("http://127.0.0.1:8000/recruit",{
            CompanyName:this.CompanyName,
            PhoneNumber:this.PhoneNumber,
            Email:this.Email,
            Department:this.Department,
            JobTitle:this.JobTitle,
            Requirements:this.Requirements,
            NumberofDevelopers:this.NumberofDevelopers,
            DateOfApplication:this.DateOfApplication,
            FileName:this.FileName
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },

    imageUpload(event){
        let formData=new FormData();
        formData.append('file',event.target.files[0]);
        axios.post(
            "http://127.0.0.1:8000/recruit/savefile",
            formData)
            .then((response)=>{
                this.PhotoFileName=response.data;
            });
    }

},
mounted:function(){
    this.refreshData();
}

}
</script>



<style>
</style>