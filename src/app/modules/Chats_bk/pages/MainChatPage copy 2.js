/* eslint-disable no-restricted-imports */
import React, {useEffect, useState} from 'react';
import { KTUtil } from "../../../../_metronic/_assets/js/components/util.js";
import KTAppChat from  "../../../../_metronic/_assets/js/layout/extended/chatapp";
import {
  Layout
} from "antd";

export default function NewsPage() {

  const [heightChatAside, setHeightChatAside] = useState(null)

  useEffect(() => {
    /* let _chatAsideEl = document.getElementById('kt_chat_aside');
            let _chatContentEl = document.getElementById('kt_chat_content');
    const height = _chatAsideEl.clientHeight;

    let _element = KTUtil.getById('kt_chat_aside');

    console.log(height)
    console.log(_element)
    console.log(_element.clientHeight) */
        KTAppChat.init('kt_chat_aside','kt_chat_content');


    return () => {
      
    }
  }, [])


  return (
    <div className="d-flex flex-row" >
  {/*begin::Aside*/}
  <div className="flex-row-auto offcanvas-mobile w-350px w-xl-400px" id="kt_chat_aside">
    {/*begin::Card*/}
    <div className="card card-custom">
      {/*begin::Body*/}
      <div className="card-body">
        {/*begin:Search*/}
        <div className="input-group input-group-solid">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <span className="svg-icon svg-icon-lg">
                {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/General/Search.svg*/}
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                  <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                    <rect x={0} y={0} width={24} height={24} />
                    <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                    <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" />
                  </g>
                </svg>
                {/*end::Svg Icon*/}
              </span>
            </span>
          </div>
          <input type="text" className="form-control py-4 h-auto" placeholder="Email" />
        </div>
        {/*end:Search*/}
        {/*begin:Users*/}
        {/* <div className="mt-7 scroll scroll-pull" style={{height: "100vh", overflowY: 'scroll'}} > */}
        <div className="mt-7 scroll scroll-pull"  >
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_12.jpg" />
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Matt Pears</a>
                <span className="text-muted font-weight-bold font-size-sm">Head of Development</span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">35 mins</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_11.jpg" />
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Charlie Stone</a>
                <span className="text-muted font-weight-bold font-size-sm">Art Director</span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">7 hrs</span>
              <span className="label label-sm label-success">4</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_10.jpg" />
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Teresa Fox</a>
                <span className="text-muted font-weight-bold font-size-sm">Web Designer</span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">3 hrs</span>
              <span className="label label-sm label-danger">5</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_13.jpg" />
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Giannis Nelson</a>
                <span className="text-muted font-weight-bold font-size-sm">IT Consultant</span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">2 days</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_15.jpg" />
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Carles Puyol</a>
                <span className="text-muted font-weight-bold font-size-sm">Operator</span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">5 mins</span>
              <span className="label label-sm label-success">9</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_16.jpg" />
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Ana Torn</a>
                <span className="text-muted font-weight-bold font-size-sm">Head Of Finance</span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">2 days</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_18.jpg" />
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Lisa Pears</a>
                <span className="text-muted font-weight-bold font-size-sm">Web Designer</span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">6 mins</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_20.jpg" />
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Amanda Bold</a>
                <span className="text-muted font-weight-bold font-size-sm">Art Director</span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">3 hrs</span>
              <span className="label label-sm label-warning">7</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg" />
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Nick Jhonson</a>
                <span className="text-muted font-weight-bold font-size-sm">IT Consultant</span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">10 mins</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_19.jpg" />
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Sarah Larson</a>
                <span className="text-muted font-weight-bold font-size-sm">Web Designer</span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">4 hrs</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_22.jpg" />
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Matt Pears</a>
                <span className="text-muted font-weight-bold font-size-sm">Head of Development</span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">35 mins</span>
              <span className="label label-sm label-success">5</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_23.jpg" />
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Tim Stone</a>
                <span className="text-muted font-weight-bold font-size-sm">Web Developer</span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">5 hrs</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_17.jpg" />
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Jhon Richardson</a>
                <span className="text-muted font-weight-bold font-size-sm">Head of Development</span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">1 week</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_18.jpg" />
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Ana Kiskia</a>
                <span className="text-muted font-weight-bold font-size-sm">Web Master</span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">35 mins</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_14.jpg" />
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Nick Stone</a>
                <span className="text-muted font-weight-bold font-size-sm">Art Director</span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">3 hrs</span>
            </div>
          </div>
          {/*end:User*/}
          {/*begin:User*/}
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center">
              <div className="symbol symbol-circle symbol-50 mr-3">
                <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_13.jpg" />
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">Nick Nilson</a>
                <span className="text-muted font-weight-bold font-size-sm">Software Arcitect</span>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="text-muted font-weight-bold font-size-sm">3 days</span>
            </div>
          </div>
          {/*end:User*/}
        </div>
        {/*end:Users*/}
      </div>
      {/*end::Body*/}
    </div>
    {/*end::Card*/}
  </div>
  {/*end::Aside*/}
  {/*begin::Content*/}
  <div className="flex-row-fluid ml-lg-8" id="kt_chat_content">
    {/*begin::Card*/}
    <div className="card card-custom">
      {/*begin::Header*/}
      <div className="card-header align-items-center px-4 py-3">
        <div className="text-left flex-grow-1">
          {/*begin::Aside Mobile Toggle*/}
          <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-md d-lg-none" id="kt_app_chat_toggle">
            <span className="svg-icon svg-icon-lg">
              {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/Communication/Adress-book2.svg*/}
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <rect x={0} y={0} width={24} height={24} />
                  <path d="M18,2 L20,2 C21.6568542,2 23,3.34314575 23,5 L23,19 C23,20.6568542 21.6568542,22 20,22 L18,22 L18,2 Z" fill="#000000" opacity="0.3" />
                  <path d="M5,2 L17,2 C18.6568542,2 20,3.34314575 20,5 L20,19 C20,20.6568542 18.6568542,22 17,22 L5,22 C4.44771525,22 4,21.5522847 4,21 L4,3 C4,2.44771525 4.44771525,2 5,2 Z M12,11 C13.1045695,11 14,10.1045695 14,9 C14,7.8954305 13.1045695,7 12,7 C10.8954305,7 10,7.8954305 10,9 C10,10.1045695 10.8954305,11 12,11 Z M7.00036205,16.4995035 C6.98863236,16.6619875 7.26484009,17 7.4041679,17 C11.463736,17 14.5228466,17 16.5815,17 C16.9988413,17 17.0053266,16.6221713 16.9988413,16.5 C16.8360465,13.4332455 14.6506758,12 11.9907452,12 C9.36772908,12 7.21569918,13.5165724 7.00036205,16.4995035 Z" fill="#000000" />
                </g>
              </svg>
              {/*end::Svg Icon*/}
            </span>
          </button>
          {/*end::Aside Mobile Toggle*/}
          {/*begin::Dropdown Menu*/}
          <div className="dropdown dropdown-inline">
            <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="ki ki-bold-more-hor icon-md" />
            </button>
            <div className="dropdown-menu p-0 m-0 dropdown-menu-left dropdown-menu-md">
              {/*begin::Navigation*/}
              <ul className="navi navi-hover py-5">
                <li className="navi-item">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon2-drop" />
                    </span>
                    <span className="navi-text">New Group</span>
                  </a>
                </li>
                <li className="navi-item">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon2-list-3" />
                    </span>
                    <span className="navi-text">Contacts</span>
                  </a>
                </li>
                <li className="navi-item">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon2-rocket-1" />
                    </span>
                    <span className="navi-text">Groups</span>
                    <span className="navi-link-badge">
                      <span className="label label-light-primary label-inline font-weight-bold">new</span>
                    </span>
                  </a>
                </li>
                <li className="navi-item">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon2-bell-2" />
                    </span>
                    <span className="navi-text">Calls</span>
                  </a>
                </li>
                <li className="navi-item">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon2-gear" />
                    </span>
                    <span className="navi-text">Settings</span>
                  </a>
                </li>
                <li className="navi-separator my-3" />
                <li className="navi-item">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon2-magnifier-tool" />
                    </span>
                    <span className="navi-text">Help</span>
                  </a>
                </li>
                <li className="navi-item">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon2-bell-2" />
                    </span>
                    <span className="navi-text">Privacy</span>
                    <span className="navi-link-badge">
                      <span className="label label-light-danger label-rounded font-weight-bold">5</span>
                    </span>
                  </a>
                </li>
              </ul>
              {/*end::Navigation*/}
            </div>
          </div>
          {/*end::Dropdown Menu*/}
        </div>
        <div className="text-center text-center">
          <div className="symbol-group symbol-hover justify-content-center">
            <div className="symbol symbol-35 symbol-circle" data-toggle="tooltip" title="Ana Fox">
              <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_16.jpg" />
            </div>
            <div className="symbol symbol-35 symbol-circle" data-toggle="tooltip" title="Nich Nilson">
              <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg" />
            </div>
            <div className="symbol symbol-35 symbol-circle" data-toggle="tooltip" title="James Stone">
              <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_22.jpg" />
            </div>
            <div className="symbol symbol-35 symbol-circle" data-toggle="tooltip" title="Micheal Bold">
              <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_23.jpg" />
            </div>
            <div className="symbol symbol-35 symbol-circle" data-toggle="tooltip" title="Sean Cooper">
              <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_15.jpg" />
            </div>
            <div className="symbol symbol-35 symbol-circle symbol-light-success" data-toggle="tooltip" title="Invite someone">
              <span className="symbol-label font-weight-bold">5+</span>
            </div>
          </div>
        </div>
        <div className="text-right flex-grow-1">
          {/*begin::Dropdown Menu*/}
          <div className="dropdown dropdown-inline">
            <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="svg-icon svg-icon-lg">
                {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/Communication/Add-user.svg*/}
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                  <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                    <polygon points="0 0 24 0 24 24 0 24" />
                    <path d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                    <path d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fillRule="nonzero" />
                  </g>
                </svg>
                {/*end::Svg Icon*/}
              </span>
            </button>
            <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-md">
              {/*begin::Navigation*/}
              <ul className="navi navi-hover py-5">
                <li className="navi-item">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon2-drop" />
                    </span>
                    <span className="navi-text">New Group</span>
                  </a>
                </li>
                <li className="navi-item">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon2-list-3" />
                    </span>
                    <span className="navi-text">Contacts</span>
                  </a>
                </li>
                <li className="navi-item">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon2-rocket-1" />
                    </span>
                    <span className="navi-text">Groups</span>
                    <span className="navi-link-badge">
                      <span className="label label-light-primary label-inline font-weight-bold">new</span>
                    </span>
                  </a>
                </li>
                <li className="navi-item">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon2-bell-2" />
                    </span>
                    <span className="navi-text">Calls</span>
                  </a>
                </li>
                <li className="navi-item">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon2-gear" />
                    </span>
                    <span className="navi-text">Settings</span>
                  </a>
                </li>
                <li className="navi-separator my-3" />
                <li className="navi-item">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon2-magnifier-tool" />
                    </span>
                    <span className="navi-text">Help</span>
                  </a>
                </li>
                <li className="navi-item">
                  <a href="#" className="navi-link">
                    <span className="navi-icon">
                      <i className="flaticon2-bell-2" />
                    </span>
                    <span className="navi-text">Privacy</span>
                    <span className="navi-link-badge">
                      <span className="label label-light-danger label-rounded font-weight-bold">5</span>
                    </span>
                  </a>
                </li>
              </ul>
              {/*end::Navigation*/}
            </div>
          </div>
          {/*end::Dropdown Menu*/}
        </div>
      </div>
      {/*end::Header*/}
      {/*begin::Body*/}
      <div className="card-body">
        {/*begin::Scroll*/}
        <div className="scroll scroll-pull" data-mobile-height={350}>
          {/*begin::Messages*/}
          <div className="messages">
            {/*begin::Message In*/}
            <div className="d-flex flex-column mb-5 align-items-start">
              <div className="d-flex align-items-center">
                <div className="symbol symbol-circle symbol-35 mr-3">
                  <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_12.jpg" />
                </div>
                <div>
                  <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Nich Larson</a>
                  <span className="text-muted font-size-sm">2 Hours</span>
                </div>
              </div>
              <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">How likely are you to recommend our company to your friends and family?</div>
            </div>
            {/*end::Message In*/}
            {/*begin::Message Out*/}
            <div className="d-flex flex-column mb-5 align-items-end">
              <div className="d-flex align-items-center">
                <div>
                  <span className="text-muted font-size-sm">3 minutes</span>
                  <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                </div>
                <div className="symbol symbol-circle symbol-35 ml-3">
                  <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg" />
                </div>
              </div>
              <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.</div>
            </div>
            {/*end::Message Out*/}
            {/*begin::Message In*/}
            <div className="d-flex flex-column mb-5 align-items-start">
              <div className="d-flex align-items-center">
                <div className="symbol symbol-circle symbol-35 mr-3">
                  <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg" />
                </div>
                <div>
                  <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Adam Cook</a>
                  <span className="text-muted font-size-sm">40 seconds</span>
                </div>
              </div>
              <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">Ok, Understood!</div>
            </div>
            {/*end::Message In*/}
            {/*begin::Message Out*/}
            <div className="d-flex flex-column mb-5 align-items-end">
              <div className="d-flex align-items-center">
                <div>
                  <span className="text-muted font-size-sm">Just now</span>
                  <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                </div>
                <div className="symbol symbol-circle symbol-35 ml-3">
                  <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg" />
                </div>
              </div>
              <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">You’ll receive notifications for all issues, pull requests!</div>
            </div>
            {/*end::Message Out*/}
            {/*begin::Message In*/}
            <div className="d-flex flex-column mb-5 align-items-start">
              <div className="d-flex align-items-center">
                <div className="symbol symbol-circle symbol-35 mr-3">
                  <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_16.jpg" />
                </div>
                <div>
                  <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Nina Pears</a>
                  <span className="text-muted font-size-sm">40 seconds</span>
                </div>
              </div>
              <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">You can unwatch this repository immediately by clicking here: 
                <a href="#">https://github.com</a></div>
            </div>
            {/*end::Message In*/}
            {/*begin::Message Out*/}
            <div className="d-flex flex-column mb-5 align-items-end">
              <div className="d-flex align-items-center">
                <div>
                  <span className="text-muted font-size-sm">Just now</span>
                  <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                </div>
                <div className="symbol symbol-circle symbol-35 ml-3">
                  <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_1.jpg" />
                </div>
              </div>
              <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">Discover what students who viewed Learn Figma - UI/UX Design. Essential Training also viewed</div>
            </div>
            {/*end::Message Out*/}
            {/*begin::Message In*/}
            <div className="d-flex flex-column mb-5 align-items-start">
              <div className="d-flex align-items-center">
                <div className="symbol symbol-circle symbol-35 mr-3">
                  <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_12.jpg" />
                </div>
                <div>
                  <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matthew Robertson</a>
                  <span className="text-muted font-size-sm">40 seconds</span>
                </div>
              </div>
              <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">Most purchased Business courses during this sale!</div>
            </div>
            {/*end::Message In*/}
            {/*begin::Message Out*/}
            <div className="d-flex flex-column mb-5 align-items-end">
              <div className="d-flex align-items-center">
                <div>
                  <span className="text-muted font-size-sm">Just now</span>
                  <a href="#" className="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                </div>
                <div className="symbol symbol-circle symbol-35 ml-3">
                  <img alt="Pic" src="/metronic/theme/html/demo1/dist/assets/media/users/300_21.jpg" />
                </div>
              </div>
              <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided</div>
            </div>
            {/*end::Message Out*/}
          </div>
          {/*end::Messages*/}
        </div>
        {/*end::Scroll*/}
      </div>
      {/*end::Body*/}
      {/*begin::Footer*/}
      <div className="card-footer align-items-center">
        {/*begin::Compose*/}
        <textarea className="form-control border-0 p-0" rows={2} placeholder="Type a message" defaultValue={""} />
        <div className="d-flex align-items-center justify-content-between mt-5">
          <div className="mr-3">
            <a href="#" className="btn btn-clean btn-icon btn-md mr-1">
              <i className="flaticon2-photograph icon-lg" />
            </a>
            <a href="#" className="btn btn-clean btn-icon btn-md">
              <i className="flaticon2-photo-camera icon-lg" />
            </a>
          </div>
          <div>
            <button type="button" className="btn btn-primary btn-md text-uppercase font-weight-bold chat-send py-2 px-6">Send</button>
          </div>
        </div>
        {/*begin::Compose*/}
      </div>
      {/*end::Footer*/}
    </div>
    {/*end::Card*/}
  </div>
  {/*end::Content*/}
</div>

  );
}
