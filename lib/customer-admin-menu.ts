export type CustomerAdminSection = {
  title: string;
  groups?: Array<{
    title: string;
    items: string[];
  }>;
  items?: string[];
};

export const CUSTOMER_ADMIN_MENU: CustomerAdminSection[] = [
  {
    title: "Reports",
    groups: [
      {
        title: "General",
        items: [
          "Summary",
          "Transaction Report",
          "Download Transactions Spreadsheet",
          "Tickets Report",
          "Top Sellers",
          "Drawing Report",
        ],
      },
      {
        title: "Money",
        items: ["Total Daily Revenue Report", "Daily CC Revenue Report", "Daily Cash Report"],
      },
      {
        title: "Emails",
        items: [
          "Download Mailing List Spreadsheet",
          "Email Report",
          "Email Clicks Report",
          "Bad Emails Report",
          "Unsubscribed",
        ],
      },
    ],
  },
  {
    title: "Actions",
    items: ["Enter Cash Sales", "Clean Up Buyer List", "Card Display", "Recurrent Purchasing"],
  },
  {
    title: "Publicise",
    items: ["Download Drawings", "Buy Page Link", "Download Social Media Graphic"],
  },
  {
    title: "Info",
    items: ["Raffle Rules", "IRS Raffle Reporting Law", "Show Prizes"],
  },
];
