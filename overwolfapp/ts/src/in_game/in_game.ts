import { AppWindow } from "../AppWindow";
import {
  OWGamesEvents,
  OWHotkeys
} from "@overwolf/overwolf-api-ts";
import { interestingFeatures, hotkeys, windowNames, lolClassId } from "../consts";
import WindowState = overwolf.windows.WindowStateEx;

// The window displayed in-game while a lol game is running.
// It listens to all info events and to the game events listed in the consts.ts file
// and writes them to the relevant log using <pre> tags.
// The window also sets up Ctrl+F as the minimize/restore hotkey.
// Like the background window, it also implements the Singleton design pattern.
class InGame extends AppWindow {
  private static _instance: InGame;
  private _lolGameEventsListener: OWGamesEvents;
  private _eventsLog: HTMLElement;
  private _infoLog: HTMLElement;
  private _usernames: HTMLElement;
  private _pronouns: HTMLElement;

  private constructor() {
    super(windowNames.inGame);

    this._eventsLog = document.getElementById('eventsLog');
    this._infoLog = document.getElementById('infoLog');
    this._usernames = document.getElementById('usernames');
    this._pronouns = document.getElementById('pronouns');

    this.setToggleHotkeyBehavior();
    this.setToggleHotkeyText();

    this._lolGameEventsListener = new OWGamesEvents({
      onInfoUpdates: this.onInfoUpdates.bind(this),
      onNewEvents: this.onNewEvents.bind(this),
    },
      interestingFeatures);
  }

  public static instance() {
    if (!this._instance) {
      this._instance = new InGame();
    }

    return this._instance;
  }

  public run() {
    this._lolGameEventsListener.start();
  }

  private onInfoUpdates(info) {
    this.logLine(this._infoLog, info, false);
  }

  // private onUsernameUpdates(info) {
  //   this.logLine(this._usernames, info, false);
  // }

  // Special events will be highlighted in the event log
  private onNewEvents(e) {
    const shouldHighlight = e.events.some(event => {
      switch (event.name) {
        // case 'kill':
        // case 'death':
        // case 'assist':
        // case 'level':
        // case 'matchStart':
        // case 'matchEnd':
        // case 'gold':
        // case 'all_players':
        //   return true;
        case 'matchStarted':
          alert("match started");
          return true;
      }

      return false
    });
    this.logLine(this._eventsLog, e, shouldHighlight);
  }

  // Displays the toggle minimize/restore hotkey in the window header
  private async setToggleHotkeyText() {
    const hotkeyText = await OWHotkeys.getHotkeyText(hotkeys.toggle, lolClassId);
    const hotkeyElem = document.getElementById('hotkey');
    hotkeyElem.textContent = hotkeyText;
  }

  // Sets toggleInGameWindow as the behavior for the Ctrl+F hotkey
  private async setToggleHotkeyBehavior() {
    const toggleInGameWindow = async (hotkeyResult: overwolf.settings.hotkeys.OnPressedEvent): Promise<void> => {
      console.log(`pressed hotkey for ${hotkeyResult.name}`);
      const inGameState = await this.getWindowState();

      if (inGameState.window_state === WindowState.NORMAL ||
        inGameState.window_state === WindowState.MAXIMIZED) {
        this.currWindow.minimize();
      } else if (inGameState.window_state === WindowState.MINIMIZED ||
        inGameState.window_state === WindowState.CLOSED) {
        this.currWindow.restore();
      }
    }

    OWHotkeys.onHotkeyDown(hotkeys.toggle, toggleInGameWindow);
  }

  // Appends a new line to the specified log
  private logLine(log: HTMLElement, data, highlight) {
    console.log(`${log.id}:`);
    console.log(data);
    const line = document.createElement('pre');
    line.textContent = JSON.stringify(data);

    if (highlight) {
      line.className = 'highlight';
    }

    var info = data;
    console.log("game_info");
    console.log(info.game_info);
    console.log("teams");
    console.log(data.game_info.teams);
    var decoded = decodeURI(data.game_info.teams);
    console.log("decoded?");
    console.log(decoded);
    const obj = JSON.parse(decoded);
    console.log("parsed?");
    console.log(obj);
    var player;
    for (let index = 0; index < 10; index++) {
      const x = fetch(`http://accessiblol-server-1.herokuapp.com/user/lolUsername/${obj[index].summoner}`, {
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGM1NjhlN2VlZTU3YzY3MTQwMjBlZTAiLCJlbWFpbCI6InJrYWdhbWVyQGdtYWlsLmNvbSIsInByb3ZpZGVyIjoiZW1haWwiLCJuYW1lIjoidW5kZWZpbmVkIHVuZGVmaW5lZCIsInJlZnJlc2hLZXkiOiJPcTUrRnNOM3ZiUThTQ0VmRGM4WUJBPT0iLCJpYXQiOjE2MjM2MDc1MzN9.RmO39j7bH3T6HU1fG1tJXHrI0qRgXn0OcbzB2XyneoI"
        }
      })
        .then((response) => response.json())
        .then((temp) => {player = temp
        console.log(player.pronouns)
        if(!player.pronouns)
        {
          player.pronouns = "N/A";
          const usernameJson = document.createElement('div');
          usernameJson.textContent = obj[index].summoner;
          this._usernames.appendChild(usernameJson);
        }
        const pronounJson = document.createElement('div');
        pronounJson.textContent = player.pronouns;
        this._pronouns.appendChild(pronounJson);
        const usernameJson = document.createElement('div');
        usernameJson.textContent = player.lolUsername;
        this._usernames.appendChild(usernameJson);
      });
      console.log("summoner" + index);
      console.log(obj[index].summoner);
      // const usernameJson = document.createElement('pre');
      // usernameJson.textContent = obj[index].summoner;
      // log.appendChild(line);
      // this._usernames.appendChild(usernameJson);
      
    }
    const shouldAutoScroll = (log.scrollTop + log.offsetHeight) > (log.scrollHeight - 10);

    // log.appendChild(line);

    if (shouldAutoScroll) {
      log.scrollTop = log.scrollHeight;
    }
    
    overwolf.games.getRunningGameInfo(function()  {
      console.log(arguments)
      overwolf.windows.changePosition("in_game", arguments[0].width * 0.86 | 0, arguments[0].height * 0.51 | 0); //1920-270, 1080-525);
    });
    
    
  }
}

InGame.instance().run();
