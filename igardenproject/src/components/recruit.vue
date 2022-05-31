<template>
<div>
<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
 Recruit
</button>
<table class="table table-striped">

    <tr>
        <th>
            Id
        </th>
        <th>
            CompanyName
        </th>
        <th>  
            PhoneNumber
        </th>
        <th>
            Email
        </th>
        <th>
            Department
        </th>
        <th>
            JobTitle
        </th>
        <th>
            Requirements
        </th>
        <th>
            NumberofDevelopers
        </th>
         <th>
         DateOfApplication
        </th>
        <th>
            FileName
        </th>
        
    </tr>

<tbody>    
    <tr v-for="rec in recruiters"
    :key="rec.id">
        <td>{{rec.RecruiterId}}</td>
        <td>{{rec.CompanyName}}</td>
        <td>{{rec.PhoneNumber}}</td>
        <td>{{rec.Email}}</td>
        <td>{{rec.Department}}</td>
        <td>{{rec.Requirements}}</td>
        <td>{{rec.NumberofDevelopers}}</td>
        <td>{{rec.DateOfApplication}}</td>
         <td>{{rec.FileName}}</td>
        
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(rec)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(rec.RecruiterId)"
            class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>

        </td>
    </tr>
</tbody>

</table>

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
                <span class="input-group-text">CompanyName</span>
                <input type="text" class="form-control" v-model="CompanyName">
            </div>
             <div class="input-group mb-3">
                <span class="input-group-text">PhoneNumber</span>
                <input type="text" class="form-control" v-model="PhoneNumber">
            </div>
             <div class="input-group mb-3">
                <span class="input-group-text">Email</span>
                <input type="email" class="form-control" v-model="Email">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Department</span>
                <select class="form-select" v-model="Department">
                    <option v-for="dep in departments"
                    :key="dep.id">
                    {{dep.DepartmentName}}
                    </option>
                </select>
            </div>
              <div class="input-group mb-3">
                <span class="input-group-text">JobTitle</span>
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
                <span class="input-group-text">DOA</span>
                <input type="date" class="form-control" v-model="DateOfApplication">
            </div>

        </div>
        <div class="p-2 w-50 bd-highlight">
            <img width="250px" height="250px"
                :src="FilesPath+FileName"/>
            <input class="m-2" type="file" @change="imageUpload">
        </div>
    </div>
        <button type="button" @click="createClick()"
        v-if="RecruiterId==0" class="btn btn-primary">
        Create
        </button>
        <button type="button" @click="updateClick()"
        v-if="RecruiterId!=0" class="btn btn-primary">
        Update
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
        recruiters:[],
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
        FilesPath:"http://127.0.0.1:8000/filess/"

    }
},
    methods:{
    refreshData(){
        axios.get("http://127.0.0.1:8000/recruiter")
        .then((response)=>{
            this.recruiters=response.data;
        });

        axios.get("http://127.0.0.1:8000/department")
        .then((response)=>{
            this.departments=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add recruiter";
        this.RecruiterId=0;
        this.CompanyName="";
        this.PhoneNumber="";
        this.Email="";
        this.Department="",
        this.JobTitle="";
        this.Requirements="";
        this.NumberofDevelopers="",
        this.DateOfApplication="",
        this.FileName="anonymous.png"
    },
    editClick(rec){
        this.modalTitle="Edit recruiter";
        this.RecruiterId=rec.RecruiterId;
        this.CompanyName=rec.CompanyName;
        this.PhoneNumber=rec.PhoneNumber;
        this.Email=rec.Email,
        this.Department=rec.Department,
        this.JobTitle=rec.JobTitle,
        this.Requirements=rec.Requirements,
        this.NumberofDevelopers=rec.NumberofDevelopers,
        this.DateOfApplication=rec.DateOfApplication,
        this.FileName=rec.FileName
    },
    createClick(){
        axios.post("http://127.0.0.1:8000/recruiter",{
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
    updateClick(){
        axios.put("http://127.0.0.1:8000/recruiter",{
            RecruiterId:this.RecruiterId,
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
    deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete("http://127.0.0.1:8000/recruiter/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    },
    imageUpload(event){
        let formData=new FormData();
        formData.append('file',event.target.files[0]);
        axios.post(
            "http://127.0.0.1:8000/recruiter/savefile",
            formData)
            .then((response)=>{
                this.FileName=response.data;
            });
    }

},
mounted:function(){
    this.refreshData();
}

}
    
</script>