import { Injectable } from '@angular/core';
import { ApiResponse, CountryRegionResponse } from '../../types/countryregion';
import CountryRegion from 'countryregionjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  countryRegion: any = null;
  constructor() {}

  getCountryRegionInstance = (): any =>
    this.countryRegion ?? new CountryRegion();

  async getCountries(): Promise<CountryRegionResponse | null> {
    try {
      const countries: any =
        await this.getCountryRegionInstance()?.getCountries();

      return countries.map((country: ApiResponse, index: number) => ({
        value: index + 1,
        label: country.name,
      }));
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getStates(country: string): Promise<CountryRegionResponse | null> {
    try {
      if (country) {
        const states = await this.getCountryRegionInstance()?.getStates(
          country
        );
        return states.map((userState: ApiResponse, index: number) => ({
          value: index + 1,
          label: userState?.name,
        }));
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getLGAs(
    country: string,
    state: string
  ): Promise<CountryRegionResponse | null> {
    try {
      if (country && state) {
        const lgas = await this.getCountryRegionInstance()?.getLGAs(
          country,
          state
        );
        return lgas?.map((lga: ApiResponse, index: number) => ({
          value: index + 1,
          label: lga?.name,
        }));
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
