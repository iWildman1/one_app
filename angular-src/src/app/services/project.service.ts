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

    return this.http.get('http://localhost:3000/projects/find/' + username, {headers: headers})
      .map(res => res.json());
  }

  getSingleProject(id) {
    let headers = new Headers;

    headers.append('Content-Type', 'application/json');

    return this.http.get('http://localhost:3000/projects/find/id/' + id, {headers: headers})
      .map(res => res.json());
  }

  postProject(projectData) {
    let headers = new Headers;

    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/projects/create', projectData, {headers: headers})
      .map(res => res.json());
  }

  updateProject(id, projectData) {
    let headers = new Headers;

    headers.append('Content-Type', 'application/json');

    return this.http.put('http://localhost:3000/projects/update/' + id, projectData, {headers: headers})
      .map(res => res.json());
  }

  deleteProject(id) {
    let headers = new Headers;

    headers.append('Content-Type', 'application/json');

    return this.http.delete('http://localhost:3000/projects/delete/' + id, {headers: headers})
      .map(res => res.json());
  }
}
