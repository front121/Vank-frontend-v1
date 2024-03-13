import React from "react";

const World = ({
  className,
  fill,
  onClick,
}: {
  className?: string;
  fill?: string;
  onClick?: any;
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M10 20C8.63333 20 7.34167 19.7373 6.125 19.212C4.90833 18.6867 3.846 17.97 2.938 17.062C2.02933 16.154 1.31267 15.0917 0.788 13.875C0.263333 12.6583 0.000666667 11.3667 0 10C0 8.61667 0.262667 7.321 0.788 6.113C1.31333 4.905 2.03 3.84667 2.938 2.938C3.846 2.02933 4.908 1.31267 6.124 0.788C7.34 0.263333 8.632 0.000666667 10 0C11.3833 0 12.6793 0.262667 13.888 0.788C15.0967 1.31333 16.1547 2.03 17.062 2.938C17.9707 3.846 18.6873 4.90433 19.212 6.113C19.7367 7.32167 19.9993 8.61733 20 10C20 11.3667 19.7373 12.6583 19.212 13.875C18.6867 15.0917 17.97 16.1543 17.062 17.063C16.154 17.971 15.0957 18.6877 13.887 19.213C12.6783 19.7383 11.3827 20.0007 10 20ZM10 17.95C10.4333 17.35 10.8083 16.725 11.125 16.075C11.4417 15.425 11.7 14.7333 11.9 14H8.1C8.3 14.7333 8.55833 15.425 8.875 16.075C9.19167 16.725 9.56667 17.35 10 17.95ZM7.4 17.55C7.1 17 6.83767 16.429 6.613 15.837C6.38833 15.245 6.20067 14.6327 6.05 14H3.1C3.58333 14.8333 4.18767 15.5583 4.913 16.175C5.63833 16.7917 6.46733 17.25 7.4 17.55ZM12.6 17.55C13.5333 17.25 14.3627 16.7917 15.088 16.175C15.8133 15.5583 16.4173 14.8333 16.9 14H13.95C13.8 14.6333 13.6127 15.246 13.388 15.838C13.1633 16.43 12.9007 17.0007 12.6 17.55ZM2.25 12H5.65C5.6 11.6667 5.56267 11.3377 5.538 11.013C5.51333 10.6883 5.50067 10.3507 5.5 10C5.5 9.65 5.51267 9.31267 5.538 8.988C5.56333 8.66333 5.60067 8.334 5.65 8H2.25C2.16667 8.33333 2.10433 8.66267 2.063 8.988C2.02167 9.31333 2.00067 9.65067 2 10C2 10.35 2.021 10.6877 2.063 11.013C2.105 11.3383 2.16733 11.6673 2.25 12ZM7.65 12H12.35C12.4 11.6667 12.4377 11.3377 12.463 11.013C12.4883 10.6883 12.5007 10.3507 12.5 10C12.5 9.65 12.4873 9.31267 12.462 8.988C12.4367 8.66333 12.3993 8.334 12.35 8H7.65C7.6 8.33333 7.56267 8.66267 7.538 8.988C7.51333 9.31333 7.50067 9.65067 7.5 10C7.5 10.35 7.51267 10.6877 7.538 11.013C7.56333 11.3383 7.60067 11.6673 7.65 12ZM14.35 12H17.75C17.8333 11.6667 17.896 11.3377 17.938 11.013C17.98 10.6883 18.0007 10.3507 18 10C18 9.65 17.9793 9.31267 17.938 8.988C17.8967 8.66333 17.834 8.334 17.75 8H14.35C14.4 8.33333 14.4377 8.66267 14.463 8.988C14.4883 9.31333 14.5007 9.65067 14.5 10C14.5 10.35 14.4873 10.6877 14.462 11.013C14.4367 11.3383 14.3993 11.6673 14.35 12ZM13.95 6H16.9C16.4167 5.16667 15.8127 4.44167 15.088 3.825C14.3633 3.20833 13.534 2.75 12.6 2.45C12.9 3 13.1627 3.571 13.388 4.163C13.6133 4.755 13.8007 5.36733 13.95 6ZM8.1 6H11.9C11.7 5.26667 11.4417 4.575 11.125 3.925C10.8083 3.275 10.4333 2.65 10 2.05C9.56667 2.65 9.19167 3.275 8.875 3.925C8.55833 4.575 8.3 5.26667 8.1 6ZM3.1 6H6.05C6.2 5.36667 6.38767 4.754 6.613 4.162C6.83833 3.57 7.10067 2.99933 7.4 2.45C6.46667 2.75 5.63733 3.20833 4.912 3.825C4.18667 4.44167 3.58267 5.16667 3.1 6Z"
        fill={`${fill ? fill : "#A2A2A2"}`}
      />
    </svg>
  );
};

export default World;
