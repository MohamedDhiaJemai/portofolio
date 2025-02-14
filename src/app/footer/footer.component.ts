import { Component } from '@angular/core';
import { faGithub as fabGithub, faFacebook, faInstagram, faLinkedin  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  githubIcon = fabGithub;
  facebookIcon = faFacebook;
  linkedinIcon = faLinkedin;
  instagramIcon = faInstagram;
  constructor() { }
  ngOnInit() {
  }
}