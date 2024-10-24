import './dashboard.scss'
import { userDtails } from '../../components/userDetails/userDtails'
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

library.add( faCircleNotch );
dom.watch();


export function dashboard(): string {
    return `
        <div class="page">
      
                <div class="row">
                    <div class="profile topic">
                        <h1 class="title">Profile</h1>
                        <div class="container">
                            <div class="user">
                               ${userDtails()}
                            </div>
                        </div>
                    </div>
                    <div class="progress topic">
                        <h1 class="title">Progress</h1>
                        <div class="container blance">
                           <i class="fa-solid fa-circle-notch"></i>
                        </div>
                    </div>
                </div>
                <div class="row2">
                            <div class="topic">
                            <h1 class="title">Courses</h1>
                                <div class="container">
                                    <h1>Course</h1>
                                </div>
                            </div>
                </div>
         </div>

    `
}