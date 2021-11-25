CREATE DATABASE gamble_simulator;

USE gamble_simulator;

CREATE TABLE gs_users (
  id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  email_address VARCHAR(255) NOT NULL UNIQUE,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  date_of_birth DATE,
  username VARCHAR(255) UNIQUE,
  created_at DATETIME
);

CREATE TABLE gs_user_accounts (
  gs_user_id INTEGER PRIMARY KEY,
  balance DECIMAL(15,2),
  created_at DATETIME default NOW(),
  updated_at TIMESTAMP,
  FOREIGN KEY (gs_user_id) REFERENCES gs_users(id)
);

CREATE TABLE gs_events (
  gs_event_id INTEGER NOT NULL UNIQUE AUTO_INCREMENT,
  event_name VARCHAR(255) NOT NULL,
  event_time DATETIME NOT NULL,
  home_team VARCHAR(255) NOT NULL,
  away_team VARCHAR(255) NOT NULL,
  home_ml_opening_odds DECIMAL NOT NULL,
  away_ml_opening_odds DECIMAL NOT NULL,
  home_ml_closing_odds DECIMAL,
  away_ml_closing_odds DECIMAL,
  winning_team CHAR(1),
  created_at DATETIME default NOW(),
  updated_at TIMESTAMP
);

CREATE TABLE gs_event_odds (
  gs_event_odd_id INTEGER NOT NULL PRIMARY KEY,
  gs_event_id INTEGER,
  home_ml_odds DECIMAL NOT NULL,
  away_ml_odds DECIMAL NOT NULL,
  FOREIGN KEY (gs_event_id) REFERENCES gs_events(gs_event_id)
);

CREATE TABLE gs_bets (
  gs_event_odd_id INTEGER NOT NULL,
  gs_user_id INTEGER NOT NULL,
  bet_amount DECIMAL NOT NULL,
  payout DECIMAL NOT NULL,
  result INTEGER,
  created_at DATETIME DEFAULT NOW(),
  FOREIGN KEY (gs_event_odd_id) REFERENCES gs_event_odds(gs_event_odd_id),
  FOREIGN KEY (gs_user_id) REFERENCES gs_users(id)
);