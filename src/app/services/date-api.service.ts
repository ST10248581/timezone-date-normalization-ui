// src/app/core/api.service.ts

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = '/api/TestService';

export interface TestDateModel {
    eventTime: string;
    eventDate: string;
}

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    // Naive request (no timezone header)
    testNaiveDateHandling(model: TestDateModel) {
        return this.http.post(`${BASE_URL}/TestDateHandlingNoFilter`, model);
    }

    // Filtered request (sends X-Timezone header)
    testFilteredDateHandling(model: TestDateModel) {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const headers = new HttpHeaders({
            'X-Timezone': timeZone
        });

        return this.http.post(`${BASE_URL}/TestDateHandling`, model, { headers });
    }
}
