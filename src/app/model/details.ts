import { DetailsModel } from "../../app/model/details.model";

export class Details {
    flag!: number;
    name!: string;
    nativeName!: string;
    population!: number;
    region!: string;
    subRegion!: string;
    capital!: string;
    topLevelDomain!: string;
    currencies!: string;
    languages!: string[];
    borderCountries!: string[];

    constructor(model: DetailsModel) {
        this.flag = model.flag;
        this.name = model.name;
        this.nativeName = model.nativeName;
        this.population = model.population;
        this.region = model.region;
        this.subRegion = model.subRegion;
        this.capital = model.capital;
        this.topLevelDomain = model.topLevelDomain;
        this.currencies = model.currencies;
        this.languages = model.languages;
        this.borderCountries = model.borderCountries;
    }
}
