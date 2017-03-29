import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

  constructor(
    private http: Http
  ) { }

  getProjects(username) {
    let headers = new Headers

    headers.append('Content-Type', 'application/json');

    return this.http.get('projects/find/' + username, {headers: headers})
      .map(res => res.json());
  }

  getSingleProject(id) {
    let headers = new Headers;

    headers.append('Content-Type', 'application/json');

    return this.http.get('projects/find/id/' + id, {headers: headers})
      .map(res => res.json());
  }

  postProject(projectData) {
    let headers = new Headers;

    headers.append('Content-Type', 'application/json');

    return this.http.post('projects/create', projectData, {headers: headers})
      .map(res => res.json());
  }

  updateProject(id, projectData) {
    let headers = new Headers;

    headers.append('Content-Type', 'application/json');

    return this.http.put('projects/update/' + id, projectData, {headers: headers})
      .map(res => res.json());
  }

  deleteProject(id) {
    let headers = new Headers;

    headers.append('Content-Type', 'application/json');

    return this.http.delete('projects/delete/' + id, {headers: headers})
      .map(res => res.json());
  }
}
