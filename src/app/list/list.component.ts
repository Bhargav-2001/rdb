import { Component, OnInit } from '@angular/core';
import { ListService, ApiResponse } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  apiResponse: ApiResponse[] = [];
  apiResponseDesignation: ApiResponse[] = [];
  apiResponseResigned: ApiResponse[] = [];
  apiResponseOnboarding: ApiResponse[] = [];
  tableHeadings: string[] = [
    'Value',
    'Count',
    'Percentage'
  ];

  constructor(private listService: ListService) { }

  ngOnInit() {
    // Fetch data for 'Release'
    this.fetchDataForRelease();
    // Fetch data for 'Designation'
    this.fetchDataForDesignation();
    // Fetch data for 'Resigned'
    this.fetchDataForResigned();
    // Fetch data for 'ONBOARDING'
    this.fetchDataForOnboarding();
  }

  fetchDataForRelease() {
    this.listService.fetchData().subscribe(
      (response) => {
        // Concatenate the response to apiResponse array
        this.apiResponse = this.apiResponse.concat(response);
      },
      (error) => {
        console.error('Error fetching data for Release:', error);
      }
    );
  }

  fetchDataForDesignation() {
    this.listService.fetchDataForDesignation().subscribe(
      (response) => {
        // Concatenate the response to apiResponseDesignation array
        this.apiResponseDesignation = this.apiResponseDesignation.concat(response);
      },
      (error) => {
        console.error('Error fetching data for Designation:', error);
      }
    );
  }

  fetchDataForResigned() {
    this.listService.fetchDataForResigned().subscribe(
      (response) => {
        // Concatenate the response to apiResponseResigned array
        this.apiResponseResigned = this.apiResponseResigned.concat(response);
      },
      (error) => {
        console.error('Error fetching data for Resigned:', error);
      }
    );
  }

  fetchDataForOnboarding() {
    this.listService.fetchDataForOnboarding().subscribe(
      (response:any) => {
        // Concatenate the response to apiResponseOnboarding array
        this.apiResponseOnboarding = this.apiResponseOnboarding.concat(response);
      },
      (error) => {
        console.error('Error fetching data for ONBOARDING:', error);
      }
    );
  }
}
