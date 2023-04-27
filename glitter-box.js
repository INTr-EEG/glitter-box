/******************** 
 * Glitter-Box Test *
 ********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'glitter-box';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'duration_secs': [60, 30, 15, 10, 5],
    'debug': ["off", "on"],
};

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from functions_g

function make_button(name, text, pos, size) {
    return new visual.ButtonStim({"win": psychoJS.window, "text": text, "pos": pos, "letterHeight": 0.04, "size": size, "borderWidth": 0.005, "fillColor": "lightgrey", "borderColor": "darkgrey", "color": "black", "colorSpace": "rgb", "opacity": null, "bold": true, "italic": false, "padding": null, "anchor": "center", "name": name});
}

function make_img(name, file_name, pos, size, opacity) {
    return new visual.ImageStim({"win": psychoJS.window, "name": name, "image": file_name, "pos": pos, "size": size, "opacity": opacity});
}

function make_slide(name, pos = [0, 0], size = SLIDE_SIZE) {
    return make_img(name, `${SLIDES_DIR}/${name}.png`, pos, size, 1);
}

function round_dp(x, dp = 5) {
    var num;
    [num] = [Math.pow(10, dp)];
    return (Math.round((x * num)) / num);
}

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(beginRoutineBegin());
flowScheduler.add(beginRoutineEachFrame());
flowScheduler.add(beginRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'resources/gift-box.png', 'path': 'resources/gift-box.png'},
    {'name': 'resources/slide-1.png', 'path': 'resources/slide-1.png'},
    {'name': 'resources/slide-2.png', 'path': 'resources/slide-2.png'},
    {'name': 'resources/slide-3.png', 'path': 'resources/slide-3.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var beginClock;
var expVersion;
var SHOW_DEBUG;
var THRESH_SECS;
var SLIDES_DIR;
var SLIDE_W_1;
var SLIDE_SIZE_1;
var SLIDE_W_2;
var SLIDE_SIZE_2;
var SLIDE_1;
var SLIDE_2;
var SLIDE_3;
var BOX_W;
var BOX_SIZE;
var BOX_POS;
var BOX;
var NEXT;
var MOUSE;
var MOUSE_L;
var MOUSE_L_prev;
var begin_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "begin"
  beginClock = new util.Clock();
  // Run 'Begin Experiment' code from begin_code
  expVersion = "2023.04.27";
  SHOW_DEBUG = (expInfo["debug"] === "on");
  THRESH_SECS = Number.parseInt(expInfo["duration_secs"]);
  SLIDES_DIR = "resources";
  SLIDE_W_1 = 1.4;
  SLIDE_SIZE_1 = [SLIDE_W_1, ((SLIDE_W_1 / 1920) * 1080)];
  SLIDE_W_2 = 1.6;
  SLIDE_SIZE_2 = [SLIDE_W_2, ((SLIDE_W_2 / 1920) * 1080)];
  SLIDE_1 = make_slide("slide-1", [0, 0], SLIDE_SIZE_1);
  SLIDE_2 = make_slide("slide-2", [0, 0], SLIDE_SIZE_1);
  SLIDE_3 = make_slide("slide-3", [0, 0], SLIDE_SIZE_2);
  BOX_W = 0.5;
  BOX_SIZE = [BOX_W, ((BOX_W / 690) * 652)];
  BOX_POS = [0, (- 0.12)];
  BOX = make_img("gift-box", "resources/gift-box.png", BOX_POS, BOX_SIZE, 1);
  NEXT = make_button("continue", "Continue", [0.6, (- 0.35)], [0.25, 0.1]);
  MOUSE = new core.Mouse({"win": psychoJS.window});
  MOUSE_L = 0;
  MOUSE_L_prev = 0;
  
  begin_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var START_T;
var END_T;
var NEXT_SLIDE;
var x;
var y;
var coords_x;
var coords_y;
var coords_t;
var coords_inbox;
var beginComponents;
function beginRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'begin' ---
    t = 0;
    beginClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from begin_code
    SLIDE_1.autoDraw = true;
    BOX.autoDraw = true;
    NEXT.autoDraw = true;
    START_T = null;
    END_T = null;
    NEXT_SLIDE = true;
    x = 0;
    y = 0;
    coords_x = [];
    coords_y = [];
    coords_t = [];
    coords_inbox = [];
    
    // keep track of which components have finished
    beginComponents = [];
    beginComponents.push(begin_text);
    
    for (const thisComponent of beginComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function beginRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'begin' ---
    // get current time
    t = beginClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from begin_code
    if ((NEXT_SLIDE && ((t - START_T) > THRESH_SECS))) {
        NEXT_SLIDE = false;
        SLIDE_1.autoDraw = false;
        SLIDE_2.autoDraw = true;
        BOX.autoDraw = false;
        BOX.autoDraw = true;
    }
    MOUSE_L = MOUSE.getPressed()[0];
    if ((MOUSE_L_prev !== MOUSE_L)) {
        MOUSE_L_prev = MOUSE_L;
        if (MOUSE_L) {
            if ((START_T === null)) {
                if (NEXT.contains(MOUSE)) {
                    START_T = t;
                    NEXT.autoDraw = false;
                }
            } else {
                if ((END_T === null)) {
                    if (((t - START_T) > THRESH_SECS)) {
                        if (BOX.contains(MOUSE)) {
                            END_T = t;
                            BOX.autoDraw = false;
                            SLIDE_2.autoDraw = false;
                            SLIDE_3.autoDraw = true;
                        }
                    } else {
                        [x, y] = MOUSE.getPos();
                        coords_x.push(round_dp(x));
                        coords_y.push(round_dp(y));
                        coords_t.push(round_dp((t - START_T)));
                        coords_inbox.push(BOX.contains(MOUSE));
                    }
                } else {
                    if (((t - END_T) > 1)) {
                        continueRoutine = false;
                    }
                }
            }
        }
    }
    if (SHOW_DEBUG) {
        begin_text.text = `
    t = ${round(t, 3)}
    frameN = ${frameN}
    START_T = ${round(START_T, 3)}
    end-by = ${round((THRESH_SECS + START_T), 3)}
    coords_x = ${coords_x}
    coords_y = ${coords_y}
    coords_t = ${coords_t}
    coords_inbox = ${coords_inbox}`
    ;
    }
    
    
    // *begin_text* updates
    if (t >= 0.0 && begin_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_text.tStart = t;  // (not accounting for frame time here)
      begin_text.frameNStart = frameN;  // exact frame index
      
      begin_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of beginComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function beginRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'begin' ---
    for (const thisComponent of beginComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from begin_code
    psychoJS.experiment.addData("expVersion", expVersion);
    psychoJS.experiment.addData("n_screentaps", coords_x.length);
    psychoJS.experiment.addData("coords_x", coords_x);
    psychoJS.experiment.addData("coords_y", coords_y);
    psychoJS.experiment.addData("coords_t", coords_t);
    psychoJS.experiment.addData("coords_inbox", coords_inbox);
    
    // the Routine "begin" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
