import { Component } from '@angular/core';
import { ApiService, TestDateModel } from '../../services/date-api.service';
import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-test-timezone',
    standalone: true,
    templateUrl: './date-tester.component.html',
    styleUrls: ['./date-tester.component.css'],
    imports: [CommonModule, FormsModule, HttpClientModule, JsonPipe]
})
export class TestTimezoneComponent {
    model: TestDateModel = {
        eventTime: '',
        eventDate: ''
    };

    naiveResponse: any = null;
    filteredResponse: any = null;

    constructor(private api: ApiService) { }

    submitNaive() {
        this.api.testNaiveDateHandling(this.model).subscribe((res) => {
            this.naiveResponse = res;
        });
    }

    submitFiltered() {
        this.api.testFilteredDateHandling(this.model).subscribe((res) => {
            this.filteredResponse = res;
        });
    }
}
