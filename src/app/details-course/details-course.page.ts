import { Component, inject, OnInit } from '@angular/core';
import { GestionCourseService } from '../services/gestion-course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.page.html',
  styleUrls: ['./details-course.page.scss'],
  standalone: false,
})
export class DetailsCoursePage implements OnInit {
  selectedCourse;
  activatedRoute = inject(ActivatedRoute);
  constructor(
    private courseSer: GestionCourseService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params['id']);
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.selectedCourse = this.courseSer.getCourseById(
      Number(this.activatedRoute.snapshot.paramMap.get('id'))
    );
    console.log(this.selectedCourse);
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Etes-vous sûr de vouloir supprimer ce cours ?',
      buttons: [
        'Non',
        {
          text: 'Oui',
          handler: () => {
            this.courseSer.deleteCourse(this.selectedCourse.id);
            this.router.navigateByUrl('/home');
          },
        },
      ],
    });

    await alert.present();
  }
}
