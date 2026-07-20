// Team roster data for MGMT 6100 Summer 2026 (Section 60)
const SURVEY_CONFIG = {
  course: "MGMT 6100 Seminar in Human Resource Management (Summer 2026)",
  apiUrl: "https://script.google.com/macros/s/AKfycbzoffiaSskV0Y74mth2mJZS-cQH634CvAAY7GMVBqGhcQVRy9d-VrkIOyAeSWJN3VkW/exec",

  // Labels carry the week number so students do not read "Team meeting 5"
  // as "Team 5's meeting" and pick by their own team number.
  activities: [
    "Week 1 Team Meeting",
    "Week 2 Team Meeting",
    "Week 3 Team Meeting",
    "Week 4 Team Meeting",
    "Week 5 Team Meeting",
    "Team Presentation (the week your team presents)"
  ],

  teams: [
    { number: 1, members: ["Gabriel Adame", "Inderjot Athwal"] },
    { number: 2, members: ["Andrew Dickenson", "Daniel Esmond", "Zenaida Gamino", "Samuel Marcus"] },
    { number: 3, members: ["Nicholas Mascaro", "Michelle Moss", "Tony Pacheco"] },
    { number: 4, members: ["Breanna Polk", "Denise Romero"] },
    { number: 5, members: ["Robert Salvador", "Reece Stevenson", "Kendall Trotter"] },
    { number: 6, members: ["Luis Vaca-Corona", "Adriana Van Grinsven", "Sarah Watkins", "Scott Swan"] }
  ],

  ratingScale: [
    { value: 1, label: "Little or weak effort", description: "Detrimental to team" },
    { value: 2, label: "Insufficient effort", description: "Met minimal standards of team" },
    { value: 3, label: "Sufficient effort", description: "Contributed adequately to team" },
    { value: 4, label: "Very strong work", description: "Contributed significantly to team" },
    { value: 5, label: "Excellent work", description: "Was crucial component to team's success" }
  ],

  emails: {
    // Team 1
    "Gabriel Adame": "gadame1@csub.edu",
    "Inderjot Athwal": "iathwal@csub.edu",
    // Team 2
    "Andrew Dickenson": "adickenson@csub.edu",
    "Daniel Esmond": "desmond@csub.edu",
    "Zenaida Gamino": "zgamino@csub.edu",
    "Samuel Marcus": "smarcus1@csub.edu",
    // Team 3
    "Nicholas Mascaro": "nmascaro@csub.edu",
    "Michelle Moss": "mmoss3@csub.edu",
    "Tony Pacheco": "jpacheco5@csub.edu",
    // Team 4
    "Breanna Polk": "bpolk1@csub.edu",
    "Denise Romero": "dromero12@csub.edu",
    // Team 5
    "Robert Salvador": "rsalvador1@csub.edu",
    "Reece Stevenson": "rstevenson4@csub.edu",
    "Kendall Trotter": "ktrotter1@csub.edu",
    // Team 6
    "Luis Vaca-Corona": "lvaca@csub.edu",
    "Adriana Van Grinsven": "avan-grinsven@csub.edu",
    "Sarah Watkins": "swatkins5@csub.edu",
    "Scott Swan": "sswan1@csub.edu"
  }
};
