export interface Casino {
  id: string;
  name: string;
  score: number;
  bonus: string;
  color: string;
  badge?: string;
  link: string;
  features: string[];
}

export const casinos: Casino[] = [
  {
    id: "pokerstars",
    name: "PokerStars Casino",
    score: 9.2,
    bonus: "200% up to €300 on first deposit + 88 free spins",
    color: "#722f37",
    link: "#",
    features: ["Licensed by SRIJ", "Live Casino", "Mobile App"],
  },
  {
    id: "netbet",
    name: "NetBet Casino",
    score: 9.0,
    bonus: "150% up to €200 on first deposit + 25 free spins",
    color: "#1a3a5c",
    link: "#",
    features: ["Licensed by SRIJ", "Sports Betting", "Fast Withdrawals"],
  },
  {
    id: "unibet",
    name: "Unibet Casino",
    score: 9.5,
    bonus: "Up to €250 bonus + 50 free spins on first deposit",
    color: "#1b5e20",
    badge: "Top Rated",
    link: "#",
    features: ["Licensed by SRIJ", "Top Rated", "24/7 Support"],
  },
  {
    id: "beam4media-pick",
    name: "Beam4media Pick",
    score: 8.0,
    bonus: "100% up to €150 on first deposit + 30 free spins",
    color: "#4a1a6b",
    link: "#",
    features: ["Licensed by SRIJ", "Editor's Choice", "New Players"],
  },
];
