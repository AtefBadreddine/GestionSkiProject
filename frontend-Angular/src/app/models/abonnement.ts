export class Abonnement {
  numAbon : number;
  dateDebut: Date;
  dateFin: Date;
  prixAbon: number;
  typeAbonnement: TypeAbonnement;

}
export enum TypeAbonnement {
  ANNUEL = 'ANNUEL',
  MENSUEL = 'MENSUEL',
  SEMESTRIEL = 'SEMESTRIEL'
}
export const TypeAbonnementValues = Object.values(TypeAbonnement);