import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import MenuAppBar from './MenuAppBar';
import { useEffect, useState } from "react";
import { Button } from '@material-ui/core';
import { ACCESS_TOKEN } from "export/export";

function createData(list) {
  var tempList = []
  for(var i in list){
    tempList.push(
      {id : list[i].fundingId, 
      title : list[i].title, 
      summary : list[i].summary, 
      category : list[i].category, 
      postDate : list[i].postDate,
      manageUrl : list[i].manageUrl,
      status : list[i].status
      }
    );
  }
  return tempList;
}


  export default function FundingInspectionAdmin() {
    const [token,setToken] = useState(localStorage.getItem("token"))
    const [rows,setRows] = React.useState([])

    function fundingOk(e, params) {
      e.preventDefault();
      changeConfirm(params.id)
      alert("승인되었습니다.");
    }

    function fundingNo(e,params) {
      e.preventDefault();
      window.location.href = "/admin-fundingNo/"+params.id;
    }

    //펀딩 상세보기로 이동
  function fundingSelect(e,params) {
    e.preventDefault();
    window.location.href = 
      "/admin-fundingView/"+params.row.manageUrl;  
  }

    const columns = [
      {
        field: 'id',
        headerName: '아아디',
        type: 'number',
        width: 120 },
      {
        field: 'title',
        headerName: '제목',
        width: 150,
        type: 'text',
        editable: true,
      },
      {
          field: 'summary',
          headerName: '요약',
          type: 'text',
          width: 120,
          editable: true,
        },
        {
          field: 'postDate',
          headerName: '게시일',
          type: 'text',
          width: 200,
          editable: true,
        },
        {
          field: 'category',
          headerName: '카테고리',
          type: 'text',
          width: 150,
          editable: true,
        },
        {
          field: 'manageUrl',
          headerName: 'Url',
          type: 'text',
          width: 150,
          editable: true,
        },
        {
          field: 'status',
          headerName: '상태',
          type: 'text',
          width: 150,
          editable: true,
        },
        {
          field: 'button',
          headerName: '상세보기',
          type: 'button',
          width: 150,
          editable: true,
          renderCell : (params) => (
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{marginLeft:16}}
              onClick={(e) => {fundingSelect(e, params)}}
            >상세보기</Button>
          )
        },
        {
          field: 'comfirm',
          headerName: '승인',
          type: 'button',
          width: 120,
          editable: true,
          renderCell : (params) => (
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{marginLeft:16}}
              onClick={(e) => {fundingOk(e, params)}}
            >승인</Button>
          )
        },
        {
          field: 'reject',
          headerName: '거절',
          type: 'button',
          width: 120,
          editable: true,
          renderCell : (params) => (
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{marginLeft:16}}
              onClick={(e) => {fundingNo(e, params)}}
            >거절</Button>
          )
        },
    ];

    //심사승인
    function changeConfirm(id) {
      console.log("메소드 실행잘됨")
      fetch('http://localhost:8081/admin/fundingOk/'+id, {
        headers: {
          'content-type': 'application/json',
          "Authorization" : 'Bearer '+ localStorage.getItem(ACCESS_TOKEN)
        }
      }) 
      .then(res => res.json())
      .then((res) => {
        console.log(res)
        if(!res.status==200){
          console.log("혹시 여기왔니?")
          throw new Error('http 오류');
        }
      });
    }

    //심사 전체
    useEffect(() => {
        fetch('http://localhost:8081/admin/fundingInspection', {
          headers: {
            'content-type': 'application/json',
            "Authorization" : 'Bearer '+ localStorage.getItem(ACCESS_TOKEN)
          }
        }) 
        .then(res => res.json())
        .then((res) => {
          console.log("아래")
          console.log(res)
          console.log("위")
          if(!res.status==200){
            console.log("혹시 여기왔니?")
            throw new Error('http 오류');
          }
          setRows(createData(res));
        })
      }, []);
      return (
        <div>
          <MenuAppBar></MenuAppBar>
            <h2>funding심사관리</h2>
          <div style={{ height: 800, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            checkboxSelection
            disableSelectionOnClick/>
          </div>
        </div>
      )

}