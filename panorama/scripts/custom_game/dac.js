// 全局变量
var CHESS_2_HERO = {
    chess_tusk: 'npc_dota_hero_tusk',
    chess_cm: 'npc_dota_hero_crystal_maiden',
    chess_axe: 'npc_dota_hero_axe',
    chess_eh: 'npc_dota_hero_enchantress',
    chess_om: 'npc_dota_hero_ogre_magi',
    chess_am: 'npc_dota_hero_antimage',
    chess_clock: 'npc_dota_hero_rattletrap',
    chess_ss: 'npc_dota_hero_shadow_shaman',
    chess_bh: 'npc_dota_hero_bounty_hunter',
    chess_wd: 'npc_dota_hero_witch_doctor',
    chess_tk: 'npc_dota_hero_tinker',
    chess_bm: 'npc_dota_hero_beastmaster',
    chess_jugg: 'npc_dota_hero_juggernaut',
    chess_lyc: 'npc_dota_hero_lycan',
    chess_shredder: 'npc_dota_hero_shredder',
    chess_pa: 'npc_dota_hero_phantom_assassin',
    chess_puck: 'npc_dota_hero_puck',
    chess_slardar: 'npc_dota_hero_slardar',
    chess_ck: 'npc_dota_hero_chaos_knight',
    chess_dr: 'npc_dota_hero_drow_ranger',
    chess_light: 'npc_dota_hero_keeper_of_the_light',
    chess_razor: 'npc_dota_hero_razor',
    chess_ok: 'npc_dota_hero_omniknight',
    chess_wr: 'npc_dota_hero_windrunner',
    chess_sk: 'npc_dota_hero_sand_king',
    chess_abaddon: 'npc_dota_hero_abaddon',
    chess_slark: 'npc_dota_hero_slark',
    chess_sniper: 'npc_dota_hero_sniper',
    chess_kunkka: 'npc_dota_hero_kunkka',
    chess_doom: 'npc_dota_hero_doom_bringer',
    chess_lina: 'npc_dota_hero_lina',
    chess_troll: 'npc_dota_hero_troll_warlord',
    chess_veno: 'npc_dota_hero_venomancer',
    chess_nec: 'npc_dota_hero_necrolyte',
    chess_ta: 'npc_dota_hero_templar_assassin',
    chess_gyro: 'npc_dota_hero_gyrocopter',
    chess_lich: 'npc_dota_hero_lich',
    chess_qop: 'npc_dota_hero_queenofpain',
    chess_th: 'npc_dota_hero_tidehunter',
    chess_enigma: 'npc_dota_hero_enigma',
    //
    chess_bat: 'npc_dota_hero_batrider',
    chess_luna: 'npc_dota_hero_luna',
    chess_tp: 'npc_dota_hero_treant',
    chess_sf: 'npc_dota_hero_nevermore',
    chess_dk: 'npc_dota_hero_dragon_knight',
    chess_viper: 'npc_dota_hero_viper',
    chess_medusa: 'npc_dota_hero_medusa',
    chess_disruptor: 'npc_dota_hero_disruptor',
    chess_ga: 'npc_dota_hero_alchemist',
    chess_tech: 'npc_dota_hero_techies',
    //
    chess_fur: 'npc_dota_hero_furion',
    chess_ld: 'npc_dota_hero_lone_druid',
    chess_morph: 'npc_dota_hero_morphling',
    chess_tb: 'npc_dota_hero_terrorblade',
    chess_tiny: 'npc_dota_hero_tiny',
    chess_nec_ssr: 'npc_dota_hero_necrolyte',
    chess_ck_ssr: 'npc_dota_hero_chaos_knight',
};
var CHESS_2_LEVEL = {
    chess_tusk: 1,
    chess_cm: 2,
    chess_axe: 1,
    chess_eh: 1,
    chess_om: 1,
    chess_am: 1,
    chess_clock: 1,
    chess_ss: 1,
    chess_bh: 1,
    chess_wd: 2,
    chess_tk: 1,
    chess_bm: 2,
    chess_jugg: 2,
    chess_lyc: 3,
    chess_shredder: 2,
    chess_pa: 3,
    chess_puck: 2,
    chess_slardar: 2,
    chess_ck: 2,
    chess_dr: 1,
    chess_light: 4,
    chess_razor: 3,
    chess_ok: 3,
    chess_wr: 3,
    chess_sk: 3,
    chess_abaddon: 3,
    chess_slark: 3,
    chess_sniper: 3,
    chess_kunkka: 4,
    chess_doom: 4,
    chess_lina: 3,
    chess_troll: 4,
    chess_veno: 3,
    chess_nec: 4,
    chess_ta: 4,
    chess_gyro: 5,
    chess_lich: 5,
    chess_qop: 2,
    chess_th: 5,
    chess_enigma: 5,

    chess_bat: 1,
    chess_luna: 2,
    chess_tp: 2,
    chess_sf: 3,
    chess_dk: 4,
    chess_viper: 3,
    chess_medusa: 4,
    chess_disruptor: 4,
    chess_ga: 4,
    chess_tech: 5,

    chess_fur: 2,
    chess_ld: 4,

    chess_morph: 2,
    chess_tiny: 1,
    chess_tb: 3,
    chess_ck_ssr: 15,
    chess_nec_ssr: 10,
};
var LEVEL_2_COLOR = {
    1: '#bbbbbb',
    2: '#bbbbff',
    3: '#6666ff',
    4: '#ff00ff',
    5: '#ff8800',
    6: '#ade55c',
}
var COLOR = {
    "1":"#888888",
    "2":"#4444ff",
    "3":"#ff00ff",
    "4":"#ff8800",
}
var CHESS_2_SPEC_CLASS = {
    // 1
    chess_tusk: 'is_beast,is_warrior',
    chess_cm: 'is_human,is_mage',
    chess_axe: 'is_orc,is_warrior', 
    chess_eh: 'is_beast,is_druid',
    chess_om: 'is_ogre,is_mage',
    chess_am: 'is_elf,is_demonhunter',
    chess_clock: 'is_goblin,is_mech',
    chess_ss: 'is_troll,is_shaman',
    chess_bh: 'is_goblin,is_assassin',
    chess_wd: 'is_troll,is_warlock',
    // 2
    chess_tk: 'is_goblin,is_mech',
    chess_bm: 'is_orc,is_hunter',
    chess_jugg: 'is_orc,is_warrior',
    chess_lyc: 'is_human,is_beast,is_warrior',
    chess_shredder: 'is_goblin,is_mech',
    chess_pa: 'is_elf,is_assassin',
    chess_puck: 'is_elf,is_dragon,is_mage',
    chess_slardar: 'is_naga,is_warrior',
    chess_ck: 'is_demon,is_knight',
    // 3
    chess_dr: 'is_undead,is_hunter',
    chess_light: 'is_human,is_mage',
    chess_razor: 'is_element,is_mage',
    chess_ok: 'is_human,is_knight',
    chess_wr: 'is_elf,is_hunter',
    chess_sk: 'is_beast,is_assassin',
    chess_abaddon: 'is_undead,is_knight',
    chess_slark: 'is_naga,is_assassin',
    chess_sniper: 'is_dwarf,is_hunter',
    // 4
    chess_kunkka: 'is_human,is_warrior',
    chess_doom: 'is_demon,is_warrior',
    chess_lina: 'is_human,is_mage',
    chess_troll: 'is_troll,is_warrior',
    chess_veno: 'is_beast,is_warlock',
    chess_nec: 'is_undead,is_warlock',
    chess_ta: 'is_elf,is_assassin',
    // 5
    chess_gyro: 'is_dwarf,is_mech',
    chess_lich: 'is_undead,is_mage',
    chess_qop: 'is_demon,is_assassin',
    chess_th: 'is_naga,is_hunter',
    chess_enigma: 'is_element,is_warlock',
    // new
    chess_bat: 'is_troll,is_knight',
    chess_luna: 'is_elf,is_knight',
    chess_tp: 'is_elf,is_druid',
    chess_sf: 'is_demon,is_warlock',
    chess_dk: 'is_human,is_dragon,is_knight',
    chess_viper: 'is_dragon,is_assassin',
    chess_medusa: 'is_naga,is_hunter',
    chess_disruptor: 'is_orc,is_shaman',
    chess_ga: 'is_goblin,is_warlock',
    chess_tech: 'is_goblin,is_mech',

    chess_fur: 'is_elf,is_druid',
    chess_ld: 'is_beast,is_druid',

    chess_tiny: 'is_element,is_warrior',
    chess_morph: 'is_element,is_assassin',
    chess_tb: 'is_demon,is_demonhunter',
    chess_nec_ssr: 'is_undead,is_warlock',
    chess_ck_ssr: 'is_demon,is_knight',
}

var my_collect_ready = {};
var IS_PANEL_DRAW_CARD_CAN_OPEN = false;

var BATTLE_STATUS = 0; // 0=准备阶段，1=pve对战，2=玩家对战，3=云对战

var RARITY_COLOR = {1:'rgba(96,96,96,0.6)',2:'rgba(64,64,255,0.6)',3:'rgba(200,0,200,0.6)',4:'rgba(255,128,0,0.6)'};
var RARITY_COLOR_TEXT_SAY = {1:'#ffffff',2:'#8888ff',3:'#ff88ff',4:'#ff8800'};
function find_dota_hud_element(id){
    var hudRoot;
    for(panel=$.GetContextPanel();panel!=null;panel=panel.GetParent()){
        hudRoot = panel;
    }
    var comp = hudRoot.FindChildTraverse(id);
    return comp;
}

// find_dota_hud_element('UnitNameLabel').text = "萌萌的棋手";
find_dota_hud_element('ToggleScoreboardButton').style['opacity'] = '0';
// find_dota_hud_element('Main').style['margin-right'] = '230px;';
find_dota_hud_element('shop_launcher_block').style['opacity'] = '0';
find_dota_hud_element('shop').style['margin-bottom'] = '0px';
find_dota_hud_element('HeightLimiter').style['opacity'] = '0';
find_dota_hud_element('GuideFlyout').style['opacity'] = '0';
find_dota_hud_element('Main').style['vertical-align'] = 'bottom';
find_dota_hud_element('Main').style['height'] = '100px';
find_dota_hud_element('Main').style['background-color'] = '#00000000';
find_dota_hud_element('ItemCombines').style['background-image'] = 'none';
find_dota_hud_element('ItemCombines').style['background-color'] = 'rgba(0,0,0,0.8)';
find_dota_hud_element('ItemCombines').style['border-radius'] = '5px';
find_dota_hud_element('inventory_tpscroll_container').style['opacity'] = '0';
find_dota_hud_element('RadarButton').style['opacity'] = '0';
find_dota_hud_element('GlyphScanContainer').style['opacity'] = '0';

$('#dac_minimap_top_ad').SetImage('http://drodo.oss-cn-shanghai.aliyuncs.com/ads/dac_minimap_top_ad_'+$.Language()+'.png?x-oss-process=image/resize,h_440,w_260');
$('#buy_candy_ad').SetImage('http://drodo.oss-cn-shanghai.aliyuncs.com/ads/buy_candy_ad_'+$.Language()+'.png')



Game.AddCommand( "+Select1", select1, "", 0 );
Game.AddCommand( "+Select2", select2, "", 0 );
Game.AddCommand( "+Select3", select3, "", 0 );
Game.AddCommand( "+Select4", select4, "", 0 );
Game.AddCommand( "+Select5", select5, "", 0 );
Game.AddCommand( "+Select6", select6, "", 0 );
Game.AddCommand( "+Select7", select7, "", 0 );
Game.AddCommand( "+Select8", select8, "", 0 );
Game.AddCommand( "+TogglePanel", toggle_panel, "", 0 );
Game.AddCommand( "+BackHome", OnBackHome, "", 0 );
Game.AddCommand( "+TabHome", OnTabHome, "", 0 );
function select1(){
    GameEvents.SendCustomGameEventToServer( "dac_pick_chess", {"team":Players.GetTeam(Players.GetLocalPlayer()),"chess_index" : 1});
}
function select2(){
    GameEvents.SendCustomGameEventToServer( "dac_pick_chess", {"team":Players.GetTeam(Players.GetLocalPlayer()),"chess_index" : 2});
}
function select3(){
    GameEvents.SendCustomGameEventToServer( "dac_pick_chess", {"team":Players.GetTeam(Players.GetLocalPlayer()),"chess_index" : 3});
}
function select4(){
    GameEvents.SendCustomGameEventToServer( "dac_pick_chess", {"team":Players.GetTeam(Players.GetLocalPlayer()),"chess_index" : 4});
}
function select5(){
    GameEvents.SendCustomGameEventToServer( "dac_pick_chess", {"team":Players.GetTeam(Players.GetLocalPlayer()),"chess_index" : 5});
}
function select6(){
    GameEvents.SendCustomGameEventToServer( "dac_pick_chess", {"team":Players.GetTeam(Players.GetLocalPlayer()),"chess_index" : 6});
}
function select7(){
    GameEvents.SendCustomGameEventToServer( "dac_pick_chess", {"team":Players.GetTeam(Players.GetLocalPlayer()),"chess_index" : 7});
}
function select8(){
    GameEvents.SendCustomGameEventToServer( "dac_pick_chess", {"team":Players.GetTeam(Players.GetLocalPlayer()),"chess_index" : 8});
}
var steamid2panelindex = {};

var player_count = 0;
var player_radient = 0;
var player_dire = 0;
var local_id = Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid;

var changed = false;
var heroindex2id = {};
var timeout = 15;
var userinfo;
var CURR_OPPO = null;

// 初始化
refresh_shop();

// 注册事件
(function () {
    GameEvents.Subscribe( "show_time", OnShowTime );
    GameEvents.Subscribe( "mima", OnMima );
    GameEvents.Subscribe( "show_draw_card", OnShowDrawCard );
    GameEvents.Subscribe( "close_draw_card", close_panel_draw_card );
    GameEvents.Subscribe( "show_is_hand_full", OnShowIsHandFull );
    GameEvents.Subscribe( "show_gold", OnShowGold );
    GameEvents.Subscribe( "send_http_cb", SendHTTPCb );
    GameEvents.Subscribe( "win_streak", OnWinStreak );
    GameEvents.Subscribe( "bullet", OnBullet );
    GameEvents.Subscribe( "sync_hp", OnSyncHp );
    GameEvents.Subscribe( "population", OnPopulation );
    GameEvents.Subscribe( "battle_info", OnBattleInfo );
    GameEvents.Subscribe( "player_reconnect", OnPlayerReconnect );
    
})();
CustomNetTables.SubscribeNetTableListener( "dac_table", DACTableChanged );

var CURR_CAMERA_PLAYER_ID = Players.GetLocalPlayer();
var CENTER_ENTITY_INDEX = {
    6 : [-2048,1920,128],
    7 : [0,1920,128],
    8 : [2048,1920,128],
    9 : [2048,-128,128],
    10 : [2048,-2174,128],
    11 : [0,-2174,128],
    12 : [-2048,-2174,128],
    13 : [-2048,-128,128],
};
var is_mimaing = false;
var mima_waterid = 0;
function OnBackHome(){
    if (CENTER_ENTITY_INDEX[Players.GetTeam(Players.GetLocalPlayer())]){
        // GameUI.SetCameraTarget( parseInt(CENTER_ENTITY_INDEX[Players.GetLocalPlayer()]) );
        GameUI.SetCameraTargetPosition( CENTER_ENTITY_INDEX[Players.GetTeam(Players.GetLocalPlayer())], 0.2 );

        CURR_CAMERA_PLAYER_ID = Players.GetLocalPlayer();
        $.Schedule(0.5,function(){
            GameUI.SetCameraTarget( -1 );
        });
    }
}
function OnTabHome(){
    var hero = null;
    for (var i=1;i<=9;i++){
        CURR_CAMERA_PLAYER_ID = CURR_CAMERA_PLAYER_ID + 1;

        if (CURR_CAMERA_PLAYER_ID > 8){
            CURR_CAMERA_PLAYER_ID = 0;           
        }
        if (!Players.IsValidPlayerID(CURR_CAMERA_PLAYER_ID)){
            continue;
        }
        hero = Players.GetPlayerHeroEntityIndex(CURR_CAMERA_PLAYER_ID);
        if (!hero){
            continue;
        }
        if (!Entities.IsAlive(hero)){
            continue;
        }
        if (!CENTER_ENTITY_INDEX[Players.GetTeam(CURR_CAMERA_PLAYER_ID)]){
            continue;
        }
        break;
    }
    if (!hero){
        return;
    }

    // GameUI.SetCameraTarget( parseInt(CENTER_ENTITY_INDEX[CURR_CAMERA_PLAYER_ID]) );
    GameUI.SetCameraTargetPosition( CENTER_ENTITY_INDEX[Players.GetTeam(CURR_CAMERA_PLAYER_ID)], 0.2 );
    
    $.Schedule(0.5,function(){
        GameUI.SetCameraTarget( -1 );
    });
}
function OnShowTime(keys){
    // var h = Math.floor(keys.total_time/3600)<10?'0'+Math.floor(keys.total_time/3600):Math.floor(keys.total_time/3600);
    // var m = Math.floor((keys.total_time-h*3600)/60)<10?'0'+Math.floor((keys.total_time-h*3600)/60):Math.floor((keys.total_time-h*3600)/60);
    // var s = (keys.total_time-h*3600-m*60)<10?'0'+(keys.total_time-h*3600-m*60):(keys.total_time-h*3600-m*60);
    $('#total_time').text = time2showtime_hour(keys.total_time);
    $('#round_time').text = keys.timer_round<10?'0'+keys.timer_round:keys.timer_round;

    if (keys.round_status == 'battle'){
        $('#round_status').text = $.Localize('zhandouhuihe');
        $('#round_status').SetHasClass('text_green',false);
        $('#round_status').SetHasClass('text_yellow',false);
        $('#round_status').SetHasClass('text_red',true);
    }
    if (keys.round_status == 'ready'){
        $('#round_status').text = $.Localize('readyhuihe');
        $('#round_status').SetHasClass('text_green',false);
        $('#round_status').SetHasClass('text_yellow',true);
        $('#round_status').SetHasClass('text_red',false);
    }
    if (keys.round_status == 'prepare'){
        $('#round_status').text = $.Localize('zhunbeihuihe');
        $('#round_status').SetHasClass('text_green',true);
        $('#round_status').SetHasClass('text_yellow',false);
        $('#round_status').SetHasClass('text_red',false);
    }
}
function OnShowGameTime(keys){
    $('#panel_time_best').text = time2showtime_hour(keys.time);
}
function time2showtime_hour(t){
    if (t>362439) t = 362439;
    var h = 0, m = 0, s = 0;
    if (!t) return "00:00:00";

    t = parseInt(t);
    h = Math.floor(t/3600);
    m = Math.floor((t-h*3600)/60);
    s = t-h*3600 - m*60;

    h = h<10?'0'+h:h;
    m = m<10?'0'+m:m;
    s = s<10?'0'+s:s;
    return h+':'+m+':'+s;
}
function OnMima(keys){
    Game.EmitSound("General.CastFail_NoMana");
    mima_waterid ++;
    var mid = mima_waterid;
    $('#text_mima').text = $.Localize(keys.text);
    $('#panel_mima').style['opacity'] = '1';
    $('#panel_mima').style['transform'] = 'scale3d( 1.25, 1.25, 1.25)';
    $.Schedule(0.2,function(){
        $('#panel_mima').style['transform'] = 'scale3d( 1, 1, 1)';
    });
    $.Schedule(3,function(){
        if (mid == mima_waterid){
            $('#panel_mima').style['opacity'] = '0';
        }
    });
}

var gold = 0;
var round_mana = 1;
var lose_streak_anwei = 0;
var win_streak_anwei = 0;
var UNIT_NAME_INDEX = {};
var ROUND = 0;
var CHESS_STAT = {};
function ShowChesses(pos){
    $.DispatchEvent( "DOTAShowTitleTextTooltip", $("#"+pos),$.Localize('tips_chesses_title'),$.Localize('tips_chesses_text'));
}
function ShowBattle(pos){
    if (BATTLE_STATUS){
        $.DispatchEvent( "DOTAShowTitleTextTooltip", $("#"+pos),$.Localize('tips_battle_title'+BATTLE_STATUS),$.Localize('tips_battle_text'+BATTLE_STATUS));
    }
}
function ShowInterest(pos){
    var curr_gold = gold;
    var shouru = ROUND>=4?5:(ROUND+1);
    var lixi = Math.floor(curr_gold/10);
    if (lixi > 5 ){
        lixi = 5;
    }
    var all_shouru = Math.floor(shouru + lixi);

    var text = $.Localize('tips_gold_0')+$.Localize('tips_gold_1')+ Math.floor(gold) + $.Localize('tips_gold_2')+shouru;
    if (lixi > 0 ){
        text += $.Localize('tips_gold_3')+lixi;
    }
    text += $.Localize('tips_gold_35');
    if (win_streak_anwei > 0){
        text += $.Localize('tips_gold_5')+(win_streak_anwei);
    }
    if (lose_streak_anwei > 0){
        text += $.Localize('tips_gold_4')+(lose_streak_anwei);
    }

    $.DispatchEvent( "DOTAShowTitleTextTooltip", $("#"+pos),$.Localize('tips_gold_title'), text);
}
function OnMouseOut(){
    $.DispatchEvent( "DOTAHideTextTooltip" );
    $.DispatchEvent( "DOTAHideTitleTextTooltip" );
}

function change_camera_2_player_ground(player_id){
    CURR_CAMERA_PLAYER_ID = player_id;
    GameUI.SetCameraTargetPosition( CENTER_ENTITY_INDEX[Players.GetTeam(CURR_CAMERA_PLAYER_ID)], 0.2 );

    $.Schedule(0.5,function(){
        GameUI.SetCameraTarget( -1 );
    });
}

function DACTableChanged(table,key,data){
    // if (key == 'stat_chess'){
    //     CHESS_STAT = data.statinfo;
    //     for (var i in CHESS_2_LEVEL){
    //         if (data.statinfo[i] && data.statinfo[i]!= 0){
    //             $('#'+i).text = '('+(-data.statinfo[i])+')';
    //         }
    //         else{
    //             $('#'+i).text = '';
    //         }
    //     }
    // }
    // if (key == 'end_board'){
    //     $('#race_gameover').SetHasClass("invisible",false);
    //     var local_id = Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid;
    //     var arr = [];            
    //     for (var d in data.data){
    //         data.data[d].steamid = d;
    //         arr.push(data.data[d]);
    //     }
    //     arr.sort(function(a,b){return b.duration-a.duration});

    //     for (var i=0;i<arr.length;i++){
    //         $("#end_rank_"+(i+1)).SetHasClass("invisible",false);

    //         if (arr[i].chess_lineup){
    //             var str = arr[i].chess_lineup;
    //             // 显示阵容
    //             var chess_lineup_arr = str.split(',');
    //             var chess_arr = [];
    //             // 去除空的和无效的
    //             for (var j=0;j<chess_lineup_arr.length;j++){
    //                 if (chess_lineup_arr[j]){
    //                     chess_arr.push(chess_lineup_arr[j]);
    //                 }
    //             }
    //             //排序
    //             chess_arr.sort(function(a,b){
    //                 var score_b = 0;
    //                 var score_a = 0;

    //                 if (a.indexOf('11')>-1){
    //                     score_a += 10000;
    //                 }
    //                 if (b.indexOf('11')>-1){
    //                     score_b += 10000;
    //                 }
    //                 if (a.indexOf('1')>-1){
    //                     score_a += 100;
    //                 }
    //                 if (b.indexOf('1')>-1){
    //                     score_b += 100;
    //                 }
    //                 score_a += get_chess_cost(a);
    //                 score_b += get_chess_cost(b);

    //                 return score_b-score_a;
    //             });
    //             //显示i的阵容！
    //             for (var j=0;j<chess_arr.length;j++){
    //                 var chess = chess_arr[j];
    //                 var chess_star = 1;
    //                 if (chess.indexOf('11')>-1){
    //                     chess_star = 3;
    //                     chess = chess.substr(0,chess.length-2);
    //                 }
    //                 if (chess.indexOf('1')>-1){
    //                     chess_star = 2;
    //                     chess = chess.substr(0,chess.length-1);
    //                 }
    //                 var chess_name = CHESS_2_HERO[chess];
    //                 var chess_index = j + 1;

    //                 $("#chess_lineup_"+(i+1)+"_"+chess_index).SetHasClass('invisible',false);
    //                 $("#chess_lineup_"+(i+1)+"_"+chess_index).heroname = chess_name;
    //                 $("#chess_lineup_"+(i+1)+"_"+chess_index).SetHasClass('chess_lineup_chess_big',false);
    //                 $("#chess_lineup_"+(i+1)+"_"+chess_index).SetHasClass('chess_lineup_chess_medium',false);
    //                 $("#chess_lineup_"+(i+1)+"_"+chess_index).SetHasClass('chess_lineup_chess_small',false);
    //                 if (chess_star == 1){
    //                     $("#chess_lineup_"+(i+1)+"_"+chess_index).SetHasClass('chess_lineup_chess_small',true);
    //                 }
    //                 if (chess_star == 2){
    //                     $("#chess_lineup_"+(i+1)+"_"+chess_index).SetHasClass('chess_lineup_chess_medium',true);
    //                 }
    //                 if (chess_star == 3){
    //                     $("#chess_lineup_"+(i+1)+"_"+chess_index).SetHasClass('chess_lineup_chess_big',true);
    //                 }
    //             }

    //         }
            


    //         $("#end_avatar_"+(i+1)).steamid = arr[i].steamid;
    //         $("#end_player_"+(i+1)).steamid = arr[i].steamid;
    //         $("#end_player_"+(i+1)).SetHasClass("invisible",false);

    //         $("#end_level_"+(i+1)).style['background-image'] = 'url("file://{images}/custom_game/level_'+arr[i].mmr_level+'.png")';
    //         $("#end_level_"+(i+1)).SetHasClass("invisible",false);
    //         $("#end_level_lbl_"+(i+1)).text = $.Localize('text_player_level_'+arr[i].mmr_level);
    //         if (arr[i].mmr_level > 0){
    //             $("#end_level_lbl_"+(i+1)).style['color'] = '#fff';
    //         }
    //         else{
    //             $("#end_level_lbl_"+(i+1)).style['color'] = '#888';
    //         }
    //         $('#end_hero_'+(i+1)).style['background-image'] = "url('file://{images}/custom_game/skaters/"+arr[i].zhugong+".png')";
    //         $("#end_hero_"+(i+1)).SetHasClass("invisible",false);
    //         $("#end_wave_"+(i+1)).text = arr[i].round;
    //         $("#end_win_"+(i+1)).text = arr[i].win_round+'-'+arr[i].lose_round;
    //         $("#end_kill_"+(i+1)).text = arr[i].kills;
    //         $("#end_death_"+(i+1)).text = arr[i].deaths;
    //         var h = Math.floor(arr[i].duration/3600);
    //         var m = Math.floor((arr[i].duration - 3600*h)/60);
    //         var s = arr[i].duration - 3600*h - 60*m;
    //         $("#end_duration_"+(i+1)).text = (h<10?'0'+h:h)+':'+(m<10?'0'+m:m)+':'+(s<10?'0'+s:s);

    //         if (arr[i].candy){
    //             $('#panel_end_board_award_'+(i+1)).SetHasClass('invisible',false);
    //             $('#text_end_board_award_'+(i+1)).text = '× '+arr[i].candy;
    //         }
    //     }
    // }
    if (key == 'cdkey'){
        var steamid = data.steam_id;
        var local_id = Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid;
        var cdkey = data.text;
        if (local_id == steamid){
            ActivateCDKEY(cdkey);
        }
    }

    //修改血条和排序
    if (key == 'user_panel_ranking'){
        var arr = [];         
        for (var d in data.table){
            data.table[d].steamid = d;
            data.table[d].score = 1000*data.table[d].hp + data.table[d].duration;
            arr.push(data.table[d]);
        }
        arr.sort(function(a,b){return b.score-a.score});
        for (var i=0;i<arr.length;i++){
            for (var j=0;j<8;j++){
                if (arr[i].player_id == j){
                    $('#outer_player_board_'+j).style['position'] = '0px '+i*100+'px 0px';
                    // $('#panel_player_board_'+j).style['opacity'] = '1';
                }
            }
        }
    }
    //个人信息显示
    if (key == 'player_info'){
        for (var i in data.info){
            var player_id = data.info[i].player_id;
            $('#panel_player_board_'+data.info[i].player_id).SetHasClass('invisible',false);
            $('#panel_player_board_'+data.info[i].player_id).style['opacity'] = '1';

            $('#avatar_player_'+data.info[i].player_id).steamid = i;
            if (data.info[i].badge){
                // $('#panel_badge_'+data.info[i].player_id).style['background-image'] = "url('file://{images}/custom_game/huizhang/"+data.info[i].badge+".png')";
                $('#panel_badge_'+data.info[i].player_id).style['background-image'] = "url('http://drodo.oss-cn-shanghai.aliyuncs.com/ads/"+data.info[i].badge+".png?x-oss-process=image/resize,h_180,w_180')";
            }
            if (player_id==0){
                $('#avatar_player_0').SetPanelEvent("onactivate", 
                    function(){ change_camera_2_player_ground(0);}
                ); 
            }
            if (player_id==1){
                $('#avatar_player_1').SetPanelEvent("onactivate", 
                    function(){ change_camera_2_player_ground(1);}
                ); 
            }
            if (player_id==2){
                $('#avatar_player_2').SetPanelEvent("onactivate", 
                    function(){ change_camera_2_player_ground(2);}
                ); 
            }
            if (player_id==3){
                $('#avatar_player_3').SetPanelEvent("onactivate", 
                    function(){ change_camera_2_player_ground(3);}
                ); 
            }
            if (player_id==4){
                $('#avatar_player_4').SetPanelEvent("onactivate", 
                    function(){ change_camera_2_player_ground(4);}
                ); 
            }
            if (player_id==5){
                $('#avatar_player_5').SetPanelEvent("onactivate", 
                    function(){ change_camera_2_player_ground(5);}
                ); 
            }
            if (player_id==6){
                $('#avatar_player_6').SetPanelEvent("onactivate", 
                    function(){ change_camera_2_player_ground(6);}
                ); 
            }
            if (player_id==7){
                $('#avatar_player_7').SetPanelEvent("onactivate", 
                    function(){ change_camera_2_player_ground(7);}
                ); 
            }
            

            $('#player_name_'+data.info[i].player_id).steamid = i;
            // $('#player_name_'+data.info[i].player_id).SetPanelEvent(
            //     "onactivate", 
            //     function(){
            //         change_camera_2_player_ground(player_id);
            //     }
            // )

            var local_id = Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid;
            if (i == local_id){
                if (!data.info[i].match){
                    show_panel_guide();
                }
            }
            
            $('#pic_player_hero_'+data.info[i].player_id).style['background-image'] = "url('file://{images}/custom_game/skaters/"+(data.info[i].onduty_hero)+".png')";
            var level = data.info[i].mmr_level;
            $('#pic_player_level_'+data.info[i].player_id).style['background-image'] = "url('file://{images}/custom_game/level_"+level+".png')"
            $('#text_player_level_'+data.info[i].player_id).text = $.Localize('text_player_level_'+level);
            if (level > 0 ){
                $('#text_player_level_'+data.info[i].player_id).style['color'] = '#fff';
            }
            else{
                $('#text_player_level_'+data.info[i].player_id).style['color'] = '#bbb';
            }
        }
    }

    if (key == "damage_stat"){
        for (var ii in data.damage_table){
            if (ii==Players.GetTeam(Game.GetLocalPlayerID())){

                $("#board_left").SetHasClass('invisible',false);

                var damages = [];
                var total_damage = 0;
                if (data.damage_table[ii]){
                    for (var i in data.damage_table[ii]){
                        total_damage += parseInt(data.damage_table[ii][i]||0);

                        if (!Entities.GetTeamNumber( parseInt(i) )){
                            return;
                        }

                        damages.push({
                            team:Entities.GetTeamNumber( parseInt(i) ),
                            name:i,
                            damage:data.damage_table[ii][i]}
                        );
                    }
                }
                if (total_damage<=0) {
                    return;
                }
                damages.sort(function(a,b){return b.damage-a.damage;});

                for (var k=0;k<10;k++){
                    $("#panel_damage_stat_"+k).SetHasClass('invisible',true);
                    $("#panel_damage_stat_text_per_"+k).style['color'] = "#bbb";
                }

                for (var j=0;j<damages.length;j++){
                    if (j>=10) break;

                    if (!damages[j]){
                        continue;
                    }

                    var color = '#fff';
                    var n = $.Localize(damages[j].name);

                    var dps = Math.floor(damages[j].damage/data.time_this_level);

                    if (dps>1000) {
                        dps = Math.floor(dps/1000)+'K';
                    }

                    var unit_index = damages[j].index;
                    var unit_team = damages[j].team;
                    var local_team = Players.GetTeam( Players.GetLocalPlayer() );

                    // if (local_team == unit_team){
                        // 绿的
                        $("#panel_damage_stat_bar_"+j).style['background-color'] = 'gradient( linear, 0% 0%, 0% 100%, from( #425d25  ), color-stop( 0.2, #5BA539 ), color-stop( .5, #4D9030), to( #425d25) );';
                    // }
                    // else{
                    //     // 红的
                    //     $("#panel_damage_stat_bar_"+j).style['background-color'] = 'gradient( linear, 0% 0%, 0% 100%, from( #5d0025  ), color-stop( 0.2, #A50039 ), color-stop( .5, #900030), to( #5d0025) );';
                    // }

                    $("#panel_damage_stat_"+j).SetHasClass('invisible',false);
                    $("#panel_damage_stat_bar_"+j).style['width'] = ''+Math.floor(damages[j].damage/total_damage*150)+'px';
                    $("#panel_damage_stat_text_"+j).text = n;
                    $("#panel_damage_stat_text_"+j).style['color'] = color;
                    $("#panel_damage_stat_text_per_"+j).text = '('+dps+' dps)';
                }
            }
        }
    }

    if (key == "hide_damage_stat"){
        $("#board_left").SetHasClass('invisible',true);
    }
    if (key = "disconnect"){
        for (var i in data.table){
            if (data.table[i] == false){
                if ($("#outer_player_board_"+i)){
                    $("#outer_player_board_"+i).style["opacity"] = "0.3";
                }
            }
            else{
                if ($("#outer_player_board_"+i)){
                    $("#outer_player_board_"+i).style["opacity"] = "1";
                }
            }
        }
    }
    if (key == 'say_bubble'){
        // var p = EMOJI_LIST[data.text] || null;
        // DisplayBubble({text:data.text,unit:data.unit,pic:p});
    }
}

// 发送弹幕
var bullet = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function bullet_chat(steam_id, player_name, text, target, c){
    var channel = 0, color = null;
    for (var i in bullet){
        if (bullet[i] == 0){
            channel = i;
            bullet[i] = 1;
            break;
        }
    }
    channel ++;

    if (channel == 0){
        return;
    }
    if (target){
        color = '#88ff88';
        text = target;
    }
    $("#bullet_text_"+channel).text = player_name+'';
    $("#bullet_tower_"+channel).text = $.Localize(text);
    $("#bullet_empty_"+channel).style.width = "0px";
    $("#bullet_text_"+channel).style.color = "#bbb" ;
    $("#bullet_tower_"+channel).style.color = color || c || "white" ;
    $.Schedule(20,function(){
        bullet[channel-1] = 0;
        $("#bullet_empty_"+channel).style['transition-duration'] = "0s";
        $("#bullet_empty_"+channel).style.width = "3840px";
        $("#bullet_empty_"+channel).style['transition-duration'] = "20s";
    });
}
function tips_over(t, pos){
    $.DispatchEvent( "DOTAShowTitleTextTooltip", $("#"+pos), $.Localize(t+'_title'), $.Localize(t) );
}
function tips_over_guide(t, pos){
    $.DispatchEvent( "DOTAShowTextTooltip", $("#"+pos), $.Localize(t+'_title'));
}
function tips_out(){
    $.DispatchEvent( "DOTAHideTitleTextTooltip");
    $.DispatchEvent( "DOTAHideTextTooltip");
}

GameUI.SetMouseCallback( function( eventName, arg ) {
    var nMouseButton = arg
    var CONSUME_EVENT = true;
    var CONTINUE_PROCESSING_EVENT = false;
    if ( GameUI.GetClickBehaviors() !== CLICK_BEHAVIORS.DOTA_CLICK_BEHAVIOR_NONE )
        return CONTINUE_PROCESSING_EVENT;

    if ( eventName === "pressed" )
    {
        if ( arg === 0 && IS_CURSOR_HERO_ICON_SHOWING == true )
        {
            // OnLeftButtonPressed();
            var position = Game.ScreenXYToWorld( GameUI.GetCursorPosition()[0], GameUI.GetCursorPosition()[1] );
            GameEvents.SendCustomGameEventToServer( "pick_chess_position", { x:position[0], y:position[1], z:position[2], player_id : Game.GetLocalPlayerID() } );
            var par = Particles.CreateParticle( "particles/ui_mouseactions/clicked_basemove.vpcf", 0,0);
            Particles.SetParticleControl( par, 0, position );
            Particles.SetParticleControl( par, 1, {x:0,y:255,z:0} );

            return CONSUME_EVENT;
        }
        if ( arg === 1 && IS_CURSOR_HERO_ICON_SHOWING == true )
        {
            GameEvents.SendCustomGameEventToServer( "cancel_pick_chess_position", { player_id : Game.GetLocalPlayerID() } );
            return CONSUME_EVENT;
        }

        // if ( arg === 1 )
        // {
        //     // OnRightButtonPressed();
        //     // show_msg('右键！');
        //     // 发出一个英雄移动命令
        //     var player_id = Game.GetLocalPlayerID();

        //     // 判断是否不能动
        //     if (Entities.IsCommandRestricted(Players.GetPlayerHeroEntityIndex(Game.GetLocalPlayerID()))){
        //         return CONSUME_EVENT;
        //     }

        //     var pos = Game.ScreenXYToWorld( GameUI.GetCursorPosition(0)[0], GameUI.GetCursorPosition(0)[1] );

        //     var par = Particles.CreateParticle( "particles/ui_mouseactions/clicked_basemove.vpcf", 0,0);
        //     Particles.SetParticleControl( par, 0,    Game.ScreenXYToWorld( GameUI.GetCursorPosition()[0], GameUI.GetCursorPosition()[1] ));
        //     Particles.SetParticleControl( par, 1, {x:0,y:255,z:0} );
            
        //     // Game.EmitSound("DOTA_Item.Butterfly");
        //     // $.Schedule(0.2,function(){
        //         GameEvents.SendCustomGameEventToServer( "mouse_right_click", {"x":pos[0],"y":pos[1],"steam_id" : local_id} );
        //     // });
            

        //     return CONSUME_EVENT;
        // }
    }

    // MousePosition()
    return CONTINUE_PROCESSING_EVENT;
} );


// 抽牌面板
var MY_DRAW_CHESS_LIST = {};
var IS_MY_HAND_FULL = false;
var IS_PANEL_DRAW_CARD_SHOW = false;
var IS_PANEL_DRAW_CARD_LOCKED = false;
function show_panel_draw_card(curr_money){
    close_panel_list();
    close_panel_guide();
    close_panel_ranking();
    close_panel_shop();
    IS_PANEL_DRAW_CARD_SHOW = true;
    IS_PANEL_DRAW_CARD_CAN_OPEN = true;
    $("#panel_draw_card").style['position'] = '0px 0px 0px';
    $("#panel_draw_card").style['transform'] = 'scale3d( 1,1,1)';
    // $("#panel_draw_card").style['position'] = '-600px -600px 0px';
    // $("#panel_draw_card").style['transform'] = 'scale3d( 0.1,0.1,0.1)';

    for (var i in MY_DRAW_CHESS_LIST){
        if ($('#hero_draw_card_box_'+i) && CHESS_2_HERO[MY_DRAW_CHESS_LIST[i]]){
            $('#panel_hero_draw_card_'+i).style['opacity'] = '1';
            var text = '<DOTAScenePanel id="hero_draw_card_'+i+'" class="hero_draw_card" unit="'+CHESS_2_HERO[MY_DRAW_CHESS_LIST[i]]+'"  light="global_light" antialias="true" renderdeferred="false" particleonly="false"/>';
            $('#hero_draw_card_box_'+i).RemoveAndDeleteChildren();
            $('#hero_draw_card_box_'+i).BCreateChildren(text);

            $('#text_draw_card_'+i).text = $.Localize(MY_DRAW_CHESS_LIST[i]);
            // $('#text_draw_card_'+i).SetAttributeString('chess',MY_DRAW_CHESS_LIST[i]);
            $('#text_draw_card_'+i+'_spec_class').text = chess2specclass(MY_DRAW_CHESS_LIST[i]);
            if (MY_DRAW_CHESS_LIST[i].indexOf('ssr') > -1){
                $('#text_draw_card_'+i).style['color'] = LEVEL_2_COLOR[6];
            }
            else{
                $('#text_draw_card_'+i).style['color'] = LEVEL_2_COLOR[CHESS_2_LEVEL[MY_DRAW_CHESS_LIST[i]]];
            }
            $('#text_draw_card_price_'+i).text = '×'+CHESS_2_LEVEL[MY_DRAW_CHESS_LIST[i]];
            $('#img_draw_card_price_'+i).SetHasClass('invisible',false);
        }
    }
    if (curr_money){
        gold = curr_money;
        set_draw_card_status();
    }
}
function chess2specclass(chess){
    var arr = CHESS_2_SPEC_CLASS[chess].split(',');
    var arr2 = [];
    for (var i=0;i<arr.length;i++){
        arr2.push($.Localize('DOTA_Tooltip_ability_'+arr[i]));
    }
    return arr2.join('  ');
}
function request_buy_chess(index){
    var price = CHESS_2_LEVEL[MY_DRAW_CHESS_LIST[index]];
    if (IS_MY_HAND_FULL){
        OnMima({text: "text_mima_hand_full"});
        return;
    }

    if (!MY_DRAW_CHESS_LIST[index]){
        return;
    }

    if (price <= gold){
        
        Game.EmitSound("General.Buy");

        GameEvents.SendCustomGameEventToServer( "select_chess", {"chess": MY_DRAW_CHESS_LIST[index],'team':Players.GetTeam(Players.GetLocalPlayer()),'mana':CHESS_2_LEVEL[MY_DRAW_CHESS_LIST[index]]});

        MY_DRAW_CHESS_LIST[index] = null;

        $('#panel_hero_draw_card_'+index).style['opacity'] = '0';
    }
    else{
        OnMima({text: "text_mima_no_mana"});
    }
}
function open_panel_draw_card(){
    // for (var x=0;x<=4;x++){
    //     if ($('#text_draw_card_'+x)){
    //         var c = $('#text_draw_card_'+x).GetAttributeString('chess',"");
    //         $('#text_draw_card_'+x).text = '('+ (-CHESS_STAT[c] || 0) + ') ' +$.Localize(c);
    //     }
    // }
    if (!IS_PANEL_DRAW_CARD_CAN_OPEN){
        return;
    }
    if (IS_PANEL_DRAW_CARD_SHOW == true){
        Game.EmitSound("ui.profile_close")
        IS_PANEL_DRAW_CARD_SHOW = false;
        $("#panel_draw_card").style['position'] = '-370px -250px 0px';
        $("#panel_draw_card").style['transform'] = 'scale3d( 0.001,0.001,0.001)';
    }
    else{
        Game.EmitSound("ui.map_open");
        IS_PANEL_DRAW_CARD_SHOW = true;
        $("#panel_draw_card").style['position'] = '0px 0px 0px';
        $("#panel_draw_card").style['transform'] = 'scale3d( 1,1,1)';
        // $("#panel_draw_card").style['position'] = '-600px -600px 0px';
        // $("#panel_draw_card").style['transform'] = 'scale3d( 0.1,0.1,0.1)';
        close_panel_list();
        close_panel_guide();
        close_panel_ranking();
        close_panel_shop();
    }
}
function close_panel_draw_card(){
    IS_PANEL_DRAW_CARD_SHOW = false;
    $("#panel_draw_card").style['position'] = '-370px -250px 0px';
    $("#panel_draw_card").style['transform'] = 'scale3d( 0.001,0.001,0.001)';
}
function OnShowDrawCard(keys){
    if (keys.unlock == true){
        Game.EmitSound("ui.crafting_newslot")
        IS_PANEL_DRAW_CARD_LOCKED = false;
        $("#image_lock").SetImage("file://{images}/custom_game/unlock.png");
        $("#image_lock").style['opacity'] = '0.1';
    }
    if (IS_PANEL_DRAW_CARD_LOCKED){
        Game.EmitSound("ui.crafting_gem_drop");
        return;
    }
    var cards = keys.cards.split(',');
    var curr_money = keys.curr_money;
    MY_DRAW_CHESS_LIST = {};
    if (cards && cards.length>1){
        for (var i=0;i<cards.length;i++){
            if (cards[i]){
                MY_DRAW_CHESS_LIST[i] = cards[i];
            }
        }
    }
    show_panel_draw_card(curr_money);
}
function set_draw_card_status(){
    if (MY_DRAW_CHESS_LIST){
        for (var i in MY_DRAW_CHESS_LIST){
            var price = CHESS_2_LEVEL[MY_DRAW_CHESS_LIST[i]];
            if (price > gold){
                $('#text_draw_card_price_'+i).style['color'] = '#ff0000';
            }
            else{
                $('#text_draw_card_price_'+i).style['color'] = '#ffffff';
            }
        }
    }
}
function OnShowIsHandFull(keys){
    IS_MY_HAND_FULL = keys.is_hand_full;
}
function OnShowGold(keys){
    if (keys.lose_streak && keys.lose_streak>=2){
        lose_streak_anwei = Math.floor(parseFloat(keys.lose_streak)/2);
        if (lose_streak_anwei>3){
            lose_streak_anwei = 3;
        }
    }
    else{
        lose_streak_anwei = 0;
    }

    if (keys.win_streak && keys.win_streak>=2){
        win_streak_anwei = Math.floor(parseFloat(keys.win_streak)/2);
        if (win_streak_anwei>3){
            win_streak_anwei = 3;
        }
    }
    else{
        win_streak_anwei = 0;
    }

    gold = keys.gold;
    $('#gold_count').text = parseInt(keys.gold);

    set_draw_card_status();
}
function lock_panel_draw_card(keys){
    if (IS_PANEL_DRAW_CARD_LOCKED){
        Game.EmitSound("ui.crafting_newslot")
        IS_PANEL_DRAW_CARD_LOCKED = false;
        $("#image_lock").SetImage("file://{images}/custom_game/unlock.png");
        $("#image_lock").style['opacity'] = '0.1';
        GameEvents.SendCustomGameEventToServer( "unlock_chess", {"team":Players.GetTeam(Players.GetLocalPlayer())});
    }
    else{
        Game.EmitSound("ui.crafting_gem_drop")
        IS_PANEL_DRAW_CARD_LOCKED = true;
        $("#image_lock").SetImage("file://{images}/custom_game/lock.png");
        $("#image_lock").style['opacity'] = '1';
        GameEvents.SendCustomGameEventToServer( "lock_chess", {"team":Players.GetTeam(Players.GetLocalPlayer())});
    }
}
function OnMouseInTips(pos,title,text){
    $.DispatchEvent( "DOTAShowTitleTextTooltip", $("#"+pos), $.Localize(title), $.Localize(text));
}
function OnMouseOutTips(){
    $.DispatchEvent( "DOTAHideTitleTextTooltip" );
}

function get_chess_cost(chess){
    var chess_name = chess;
    if (chess.indexOf('11')>-1){
        chess_name = chess_name.substr(0,chess_name.length-2);
    }
    if (chess.indexOf('1')>-1){
        chess_name = chess_name.substr(0,chess_name.length-1);
    }
    return CHESS_2_LEVEL[chess_name] || 0;
}

var IS_PANEL_GUIDE_OPEN = false;
var IS_PANEL_LIST_OPEN = false;
var IS_PANEL_RANKING_OPEN = false;
var IS_PANEL_SHOP = false;
function close_panel_guide(){
    IS_PANEL_GUIDE_OPEN = false;
    $('#panel_guide').style['opacity'] = '0';
    $('#panel_guide').style['transform'] = 'scale3d( 0.95, 0.95, 0.95)';
    $('#panel_guide').style['position'] = '-100px -50px 0px';
    Game.EmitSound("Shop.PanelUp");
}
function show_panel_guide(){
    IS_PANEL_GUIDE_OPEN = true;
    $('#panel_guide').style['opacity'] = '1';
    $('#panel_guide').style['transform'] = 'scale3d( 1, 1, 1)';
    $('#panel_guide').style['position'] = '0px 0px 0px';
    Game.EmitSound("ui.settings_open");
    close_panel_list();
    close_panel_draw_card();
    close_panel_ranking();
    close_panel_shop();
}
function open_panel_guide(){
    if (IS_PANEL_GUIDE_OPEN){
        IS_PANEL_GUIDE_OPEN = false;
        $('#panel_guide').style['opacity'] = '0';
        $('#panel_guide').style['transform'] = 'scale3d( 0.95, 0.95, 0.95)';
        $('#panel_guide').style['position'] = '-100px -50px 0px';
        Game.EmitSound("Shop.PanelUp");
    }
    else{
        IS_PANEL_GUIDE_OPEN = true;
        $('#panel_guide').style['opacity'] = '1';
        $('#panel_guide').style['transform'] = 'scale3d( 1, 1, 1)';
        $('#panel_guide').style['position'] = '0px 0px 0px';
        Game.EmitSound("ui.settings_open");
        close_panel_list();
        close_panel_draw_card();
        close_panel_ranking();
        close_panel_shop();
    }
}
function close_panel_list(){
    IS_PANEL_LIST_OPEN = false;
    $('#panel_list').style['opacity'] = '0';
    $('#panel_list').style['transform'] = 'scale3d( 0.95, 0.95, 0.95)';
    $('#panel_list').style['position'] = '-100px -50px 0px';
    Game.EmitSound("Shop.PanelUp");
}
function show_panel_list(){
    IS_PANEL_LIST_OPEN = true;
    $('#panel_list').style['opacity'] = '1';
    $('#panel_list').style['transform'] = 'scale3d( 1, 1, 1)';
    $('#panel_list').style['position'] = '0px 0px 0px';
    Game.EmitSound("ui.settings_open");
    close_panel_guide();
    close_panel_draw_card();
    close_panel_ranking();
    close_panel_shop();
}
function open_panel_list(){
    if (IS_PANEL_LIST_OPEN){
        IS_PANEL_LIST_OPEN = false;
        $('#panel_list').style['opacity'] = '0';
        $('#panel_list').style['transform'] = 'scale3d( 0.95, 0.95, 0.95)';
        $('#panel_list').style['position'] = '-100px -50px 0px';
        Game.EmitSound("Shop.PanelUp");
    }
    else{
        IS_PANEL_LIST_OPEN = true;
        $('#panel_list').style['opacity'] = '1';
        $('#panel_list').style['transform'] = 'scale3d( 1, 1, 1)';
        $('#panel_list').style['position'] = '0px 0px 0px';
        Game.EmitSound("ui.settings_open");
        close_panel_guide();
        close_panel_draw_card();
        close_panel_ranking();
        close_panel_shop();
    }
}
function close_panel_ranking(){
    IS_PANEL_RANKING_OPEN = false;
    $('#panel_ranking').style['opacity'] = '0';
    $('#panel_ranking').style['transform'] = 'scale3d( 0.95, 0.95, 0.95)';
    $('#panel_ranking').style['position'] = '-100px -50px 0px';
    Game.EmitSound("Shop.PanelUp");
}
function show_panel_ranking(){
    IS_PANEL_RANKING_OPEN = true;
    $('#panel_ranking').style['opacity'] = '1';
    $('#panel_ranking').style['transform'] = 'scale3d( 1, 1, 1)';
    $('#panel_ranking').style['position'] = '0px 0px 0px';
    Game.EmitSound("ui.settings_open");
    close_panel_guide();
    close_panel_draw_card();
    close_panel_list();
    close_panel_shop();
}
function open_panel_ranking(){
    if (IS_PANEL_RANKING_OPEN){
        IS_PANEL_RANKING_OPEN = false;
        $('#panel_ranking').style['opacity'] = '0';
        $('#panel_ranking').style['transform'] = 'scale3d( 0.95, 0.95, 0.95)';
        $('#panel_ranking').style['position'] = '-100px -50px 0px';
        Game.EmitSound("Shop.PanelUp");
    }
    else{
        IS_PANEL_RANKING_OPEN = true;
        $('#panel_ranking').style['opacity'] = '1';
        $('#panel_ranking').style['transform'] = 'scale3d( 1, 1, 1)';
        $('#panel_ranking').style['position'] = '0px 0px 0px';
        Game.EmitSound("ui.settings_open");
        close_panel_guide();
        close_panel_draw_card();
        close_panel_list();
        close_panel_shop();
    }
}
function close_panel_shop(){
    IS_PANEL_SHOP = false;
    $('#store_panel').style['opacity'] = '0';
    $('#store_panel').style['transform'] = 'scale3d( 0.95, 0.95, 0.95)';
    $('#store_panel').style['position'] = '-100px -50px 0px';
    Game.EmitSound("Shop.PanelUp");
}
function show_panel_shop(){
    IS_PANEL_SHOP = true;
    $('#store_panel').style['opacity'] = '1';
    $('#store_panel').style['transform'] = 'scale3d( 1, 1, 1)';
    $('#store_panel').style['position'] = '0px 0px 0px';
    Game.EmitSound("ui.settings_open");
    close_panel_guide();
    close_panel_draw_card();
    close_panel_list();
    close_panel_ranking();
}
function open_panel_shop(){
    if (IS_PANEL_SHOP){
        IS_PANEL_SHOP = false;
        $('#store_panel').style['opacity'] = '0';
        $('#store_panel').style['transform'] = 'scale3d( 0.95, 0.95, 0.95)';
        $('#store_panel').style['position'] = '-100px -50px 0px';
        Game.EmitSound("Shop.PanelUp");
    }
    else{
        IS_PANEL_SHOP = true;
        $('#store_panel').style['opacity'] = '1';
        $('#store_panel').style['transform'] = 'scale3d( 1, 1, 1)';
        $('#store_panel').style['position'] = '0px 0px 0px';
        Game.EmitSound("ui.settings_open");
        close_panel_guide();
        close_panel_draw_card();
        close_panel_list();
        close_panel_ranking();
    }
}
SendHTTP(
    'http://101.200.189.65:431/dac/ranking/top?count=20&hehe='+Math.random()+'&language='+$.Language(),
    'ranking_top_cb'
);
// 获取全球排行并显示
for (var j=1;j<=20;j++){
    $("#ranking_top_"+j).SetHasClass('invisible',true);
}
for (var j=1;j<=20;j++){
    $("#ranking_friend_"+j).SetHasClass('invisible',true);
}

$.AsyncWebRequest( 
    'http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=9769949E852C17956728D82F74CDF634&relationship=friend&steamid='+Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid, 
    { 
        type: 'GET',
        complete: function(a,b,c,d,e) { 
            var tt = a.responseText;
            tt = tt.substr(0,tt.length-1)
            var aa = JSON.parse(tt);

            var ff = aa.friendslist.friends;
            var ids = [];

            for (var fff in ff){
                ids.push(ff[fff].steamid);
            }

            ids.push(Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid);
            var url222 = 'http://101.200.189.65:431/dac/ranking/get?player_ids='+ids.join(',')+'&myself='+Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid;

            $.AsyncWebRequest( 
                url222, 
                { 
                    type: 'GET',
                    success: function(a) { 
                        var aa = JSON.parse(a);
                        if (!aa || !aa['ranking_info']){
                            return;
                        }
                        var data = aa['ranking_info'];

                        for (var j=1;j<=20;j++){
                            $("#ranking_friend_"+j).SetHasClass('invisible',true);
                        }

                        data.sort(function(a,b){
                            return parseInt(b.score) - parseInt(a.score);
                        });

                        for (var i=0;i<data.length;i++){
                            if (!$("#ranking_friend_"+(i+1))){
                                break;
                            }
                            $("#ranking_friend_"+(i+1)).SetHasClass('invisible',false);
                            $("#ranking_friend_avatar_"+(i+1)).steamid = data[i].player;
                            $("#ranking_friend_name_"+(i+1)).steamid = data[i].player;
                            if (Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid == data[i].player){
                                $("#ranking_friend_"+(i+1)).style['background-color'] = 'rgba(128,128,128,0.1)';
                            }
                            else{
                                $("#ranking_friend_"+(i+1)).style['background-color'] = 'rgba(0,0,0,0.1)';
                            }
                            $("#ranking_friend_level_pic_"+(i+1)).style['background-image'] = "url('file://{images}/custom_game/level_"+data[i].mmr_level+".png')";
                            $("#ranking_friend_level_text_"+(i+1)).text = $.Localize("text_player_level_"+data[i].mmr_level);
                            $("#ranking_friend_level_text_"+(i+1)).style['color'] = 'white';
                        }
                    }
                }
            );
        },
        error: function(){
        }
    }
);
function refresh_chess(){
    GameEvents.SendCustomGameEventToServer( "dac_refresh_chess", {"team":Players.GetTeam(Players.GetLocalPlayer())});
}
function toggle_panel(){
    if(IS_PANEL_DRAW_CARD_SHOW){
        close_panel_draw_card()
    }
    else{
        open_panel_draw_card()
    }
}

var STORE_CD_VER = 0;
var MY_ONDUTY_HERO = '';

function refresh_shop(){
    SendHTTP(
        'http://101.200.189.65:431/dac/shop/get/@'+Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid+'?hehe='+ Math.random(),
        'refresh_shop_cb'
    );
}
function buy_effect(eid){
    SendHTTP(
        'http://101.200.189.65:431/dac/effect/buy/@'+Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid+'@'+eid+'?hehe='+ Math.random(),
        'buy_effect_cb'
    );
    close_confirm();
    refresh_shop();
}
var click_cd = false;
function choose_hero(hid){
    MY_ONDUTY_HERO = hid;
    if (!click_cd){
        click_cd = true;
        SendHTTP(
            'http://101.200.189.65:431/dac/change/zhugong/@'+Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid+'@'+hid+'?hehe='+ Math.random(),
            'change_zhugong_cb'
        );
    }
}
function lottery_go(){
    SendHTTP(
        'http://101.200.189.65:431/dac/zhugong/random/@'+Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid+'?hehe='+ Math.random(),
        'lottery_cb'
    );
    close_confirm();
}

function time2showtime(t){
    if (t>6039) t = 6039;
    var m = 0, s = 0;
    if (!t) return "00:00";

    t = parseInt(t);
    m = Math.floor(t/60);
    s = t - m*60;

    m = m<10?'0'+m:m;
    s = s<10?'0'+s:s;
    return m+':'+s;
}
function time2showtime_hour(t){
    if (t>362439) t = 362439;
    var h = 0, m = 0, s = 0;
    if (!t) return "00:00:00";

    t = parseInt(t);
    h = Math.floor(t/3600);
    m = Math.floor((t-h*3600)/60);
    s = t-h*3600 - m*60;

    h = h<10?'0'+h:h;
    m = m<10?'0'+m:m;
    s = s<10?'0'+s:s;
    return h+':'+m+':'+s;
}
function show_store_cd(refresh_time,ver){
    if (ver !=STORE_CD_VER){
        return;
    }
    if (Date.now()/1000>=refresh_time){
        refresh_shop();
        return;
    }
    var text = time2showtime_hour(refresh_time-Math.floor(Date.now()/1000));
    $("#ramaining").text = $.Localize("text_store_cd")+": "+text;
    $.Schedule(1,function(){
        show_store_cd(refresh_time,ver);
    });
}

function confirm_recycle_hero(hero){
    show_confirm($.Localize('text_confirm_recycle_hero'),"recycle_hero('"+hero+"')")
}
function recycle_hero(hero){
    close_confirm();
    SendHTTP(
        'http://101.200.189.65:431/dac/remove/zhugong/@'+Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid+'@'+hero+'?hehe='+ Math.random(),
        'recycle_hero_cb'
    )
}
function end_game(){
    // Game.FinishGame();

    GameEvents.SendCustomGameEventToServer( "quit_game", {player_id:Players.GetLocalPlayer()});
}
function show_kejin_qrcode(){
    // $('#kejin').style['background-image'] = 'url("file://{images}/custom_game/kejinjia.png")';
    $('#buy_candy_ad').SetHasClass('invisible',false);
}
function hide_kejin_qrcode(){
    // $('#kejin').style['background-image'] = 'url("file://{images}/custom_game/kehuijia.png")';
    $('#buy_candy_ad').SetHasClass('invisible',true);
}

function OnCdkeySubmitted(){
    var text = $("#entry_cdkey").text;
    ActivateCDKEY(text);
    $("#entry_cdkey").text = '';
}
var activate_cd = false;
function ActivateCDKEY(cdkey){
    if (cdkey.length != 17){
        Game.EmitSound("General.CastFail_NoMana");
        return;
    }
    if (!activate_cd){
        activate_cd = true;
        $("#btn_entry_cdkey").style['opacity'] = '0.1';
        SendHTTP(
            'http://101.200.189.65:431/dac/cdkey/use/@'+cdkey+'@'+Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid+'?hehe='+ Math.random(),
            'activate_cdkey_cb'
        );
        $.Schedule(10,function(){
            activate_cd = false;
            $("#btn_entry_cdkey").style['opacity'] = '1';
        });
    }
}
function SendHTTP(url,cb){
    GameEvents.SendCustomGameEventToServer( "catch_crab", {
        url: url, 
        cb: cb,
        player_id: Players.GetLocalPlayer(),
        steam_id: Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid,
    } );
}
var CURR_SHOP_EFFECT,CURR_SHOP_COLLECT,CURR_SHOP_COLLECT_PARTS;
function SendHTTPCb(keys){
    var event = keys.event;
    var data = JSON.parse(keys.data);

    // 刷新商店商品cb
    if (event == 'refresh_shop_cb'){
        var object = data;

        // 显示商店cd
        var cd = object.ttl;
        if (!cd || cd < 0) {
            $("#ramaining").text = $.Localize("text_store_cd")+": ???";
        }
        else{
            var text0 = time2showtime_hour(cd);
            var refresh_time = Math.floor(Date.now()/1000) + cd;

            $("#ramaining").text = $.Localize("text_store_cd")+": "+text0;

            $.Schedule(1,function(){
                STORE_CD_VER ++;
                show_store_cd(refresh_time,STORE_CD_VER);
            });
        }

        if (!object.shop){
            return;
        }
        var shop_effect = object.shop.effect;
        CURR_SHOP_EFFECT = shop_effect.id;
        
        var shop_jihuan = object.shop.collect;
        CURR_SHOP_COLLECT = shop_jihuan.award;
        CURR_SHOP_COLLECT_PARTS = shop_jihuan.parts;

        // 填写商店内容：集换
        for (var i =0;i<=7;i++){
            $('#img_shop_jihuan_part_'+i).SetHasClass('invisible',true);
            $('#img_shop_jihuan_part_tick_'+i).SetHasClass('invisible',true);
        }
        var jihuan_hero = shop_jihuan.award.split('_')[0];
        var total_parts = shop_jihuan.parts.length;
        var have_parts = 0;
        $('#img_shop_jihuan').SetImage('file://{images}/custom_game/skaters/'+jihuan_hero+'.png');
        for (var i=0;i<shop_jihuan.parts.length;i++){
            $('#img_shop_jihuan_part_'+i).SetHasClass('invisible',false);
            $('#img_shop_jihuan_part_'+i).style['background-image'] = 'url("file://{images}/custom_game/skaters/'+shop_jihuan.parts[i].split('_')[0]+'.png")';
            $('#img_shop_jihuan_part_'+i).style['background-size'] = '100% 100%';
            if (object.collect_parts[i] || object.collect_parts[i] == 0){ 
                // 窝有这个配件
                have_parts++;
                $('#img_shop_jihuan_part_tick_'+i).SetHasClass('invisible',false);
            }
            else{
                // 窝木有这个配件
                $('#img_shop_jihuan_part_tick_'+i).SetHasClass('invisible',true);
            }
            // 鼠标移上去的提示
            // $('#img_shop_jihuan_part_'+i).SetPanelEvent(
            //     "onmousover", 
            //     function(){
            //         $.DispatchEvent( "DOTAShowTextTooltip", $('#img_shop_jihuan_part_'+i), $.Localize(shop_jihuan.parts[i]));
            //     }
            // )
            // $('#img_shop_jihuan_part_'+i).SetPanelEvent(
            //     "onmousout", 
            //     function(){
            //         $.DispatchEvent( "DOTAHideTextTooltip");
            //     }
            // )
        }
        $('#panel_shop_jihuan').style['background-color'] = COLOR[jihuan_hero.slice(1,2)];
        $('#text_shop_jihuan').text = $.Localize(jihuan_hero);


        $('#text_shop_jihuan_desc').text = $.Localize('text_shoujijindu')+'('+have_parts+'/'+total_parts+')';
        if (have_parts == total_parts){
            // 集齐了，可以兑换
            $('#buy_jihuan').style['opacity'] = '1';
            $('#buy_jihuan').SetPanelEvent(
                "onactivate", 
                function(){
                    //换！
                    confirm_jihuan_hero();
                }
            )
        }
        else{
            $('#buy_jihuan').style['opacity'] = '0.1';
            $('#buy_jihuan').SetPanelEvent(
                "onactivate", 
                function(){
                    return;
                }
            )
        }

        // 填写商店内容：特效
        $('#img_shop_texiao_curr_hero').SetImage('file://{images}/custom_game/skaters/'+object.user_info.onduty_hero.split('_')[0]+'.png');
        var shop_texiao = object.shop.effect;
        var shop_texiao_id = shop_texiao.id;
        var shop_texiao_price = shop_texiao.price;
        $('#panel_shop_texiao').style['background-color'] = COLOR[shop_texiao_id.slice(1,2)];
        $('#img_shop_texiao').SetImage('file://{images}/custom_game/effect/'+shop_texiao_id+'.png')
        $('#text_shop_texiao').text = $.Localize(shop_texiao_id);
        $('#text_shop_texiao_price').text = '× '+shop_texiao_price;
        $('#buy_texiao').SetPanelEvent(
            "onactivate", 
            function(){
                preview_effect(shop_texiao_id);
            }
        )

        var myinfo = object.user_info;

        $('#ice_storage').text = '× ' + myinfo.candy;
        var hero_count= 0;
        var zhugong_list = myinfo['zhugong'];
        var onduty_zhugong = myinfo['onduty_hero'];
        var onduty_hero = onduty_zhugong.split('_')[0];
        MY_ONDUTY_HERO = onduty_hero;
        var onduty_effect = onduty_zhugong.split('_')[1];
        var onduty_index = zhugong_list.indexOf(onduty_zhugong);
        var text = '';
        for (var i in zhugong_list){
            var zhugong = zhugong_list[i];
            
            var hero = zhugong.split('_')[0];
            var effect = zhugong.split('_')[1];

            var text_effect = '-'+$.Localize(effect);
            if (!effect || effect =='e000'){
                text_effect = '';
            }
            
            if (i == onduty_index){
                if (click_cd){
                   text_effect += '√';
                }
                text += '<Panel class="hero_sea_top_panel_summary" onactivate = "choose_hero(\''+zhugong+'\');"><Image class="img_loading_select_chesser" src="file://{images}/custom_game/skaters/'+hero+'.png"/><Label class="text_20_highlight" text = "'+$.Localize(hero)+'"/><Label class="text_20_highlight" text = "'+text_effect+'"/></Panel>';
            }
            else{
                text += '<Panel class="hero_sea_top_panel_summary" onactivate = "choose_hero(\''+zhugong+'\');"><Image class="img_loading_select_chesser" src="file://{images}/custom_game/skaters/'+hero+'.png"/><Label class="text_20" text = "'+$.Localize(hero)+'"/><Label class="text_20" text = "'+text_effect+'"/><Panel class="panel_recycle_chesser" onactivate="confirm_recycle_hero(\''+zhugong+'\')" onmouseover="DOTAShowTextTooltip(\'#tips_recycle\')" onmouseout = "DOTAHideTextTooltip()"/></Panel>';
            }

            hero_count ++;
        }
        $('#select-block-inner').RemoveAndDeleteChildren();
        $('#select-block-inner').BCreateChildren(text);

        $("#text_mychessplayer").text = $.Localize('mychessplayer')+'('+hero_count+')';


        // var text = '';
        // text += '<Panel style = "height:380px;width:200px;margin-left:20px;margin-top:-30px;flow-children:down;">';
        //     text += '<Panel style="flow-children:right;width:200px;height:50px;z-index:400;">';
        //         text += '<Image class = "collect_part" src = "file://{images}/custom_game/effect/'+shop_effect.id+'.png"/>';
        //         text += '<Image class = "collect_part" src = "file://{images}/custom_game/effect/'+shop_effect.id+'.png"/>';
        //         text += '<Image class = "collect_part" src = "file://{images}/custom_game/effect/'+shop_effect.id+'.png"/>';
        //         text += '<Image class = "collect_part" src = "file://{images}/custom_game/effect/'+shop_effect.id+'.png"/>';
        //     text += '</Panel>';
        //     text += '<Panel style="flow-children:right;width:200px;height:50px;z-index:400;">';
        //         text += '<Image class = "collect_part" src = "file://{images}/custom_game/effect/'+shop_effect.id+'.png"/>';
        //         text += '<Image class = "collect_part" src = "file://{images}/custom_game/effect/'+shop_effect.id+'.png"/>';
        //         text += '<Image class = "collect_part" src = "file://{images}/custom_game/effect/'+shop_effect.id+'.png"/>';
        //         text += '<Image class = "collect_part" src = "file://{images}/custom_game/effect/'+shop_effect.id+'.png"/>';
        //     text += '</Panel>';
        //     text += '<Panel style="width:200px;height:200px;z-index:400;">';
        //         text += '<Image style="width:200px;height:200px;" src = "file://{images}/custom_game/effect/'+shop_effect.id+'.png"/>';
        //         text += '<Panel style="vertical-align:bottom;width:200px;height:40px;background-color:'+COLOR[shop_effect.id.slice(1,2)]+';">';
        //             text += '<Label style = "horizontal-align:center;line-height:35px;font-size:22px;" text = "'+$.Localize(shop_effect.id)+'"/>';
        //         text += '</Panel>';
        //     text += '</Panel>';   
        //     text += '<Panel style="width:200px;height:30px;">';
        //         text += '<Label text = "#effectdesc" style = "color:#888;font-size:16px;vertical-align:center;horizontal-align:center;"/>';
        //     text += '</Panel>';
        //     text += '<Panel id = "request_buy_effect" class = "dota_button" style = "height:40px;width:200px;">';
        //         text += '<Image style = "width:40px;height:40px;z-index:40;margin-left:40px;" src="file://{images}/custom_game/candy.png"/>';
        //         text += '<Label class = "text_28" style = "font-family:Radiance,FZLanTingHei-R-GBK,TH Sarabun New,YDYGO 540,Gulim,MingLiU;width:100px;text-align:left;text-shadow: 2px 2px 2px #330000;z-index:100;margin-left:90px;line-height:35px;" text = "× '+shop_effect.price+'"/>';
        //     text += '</Panel>';
        // text += '</Panel>';
        // text += '<Panel style = "height:440px;width:200px;margin-left:20px;margin-top:30px;flow-children:down;">';
        //     text += '<Panel style="width:200px;height:200px;z-index:400;">';
        //         text += '<Image style="width:200px;height:200px;" src = "file://{images}/custom_game/effect/'+shop_effect.id+'.png"/>';
        //     text += '</Panel>';
        //     text += '<Panel style="width:200px;height:40px;background-color:'+COLOR[shop_effect.id.slice(1,2)]+';">';
        //         text += '<Label style = "horizontal-align:center;line-height:35px;font-size:22px;" text = "'+$.Localize(shop_effect.id)+'"/>';
        //     text += '</Panel>';
           
        //     text += '<Panel style="width:200px;height:30px;">';
        //         text += '<Label text = "#effectdesc" style = "color:#888;font-size:16px;vertical-align:center;horizontal-align:center;"/>';
        //     text += '</Panel>';
        //     text += '<Panel id = "request_buy_effect" class = "dota_button" style = "height:40px;width:200px;">';
        //         text += '<Image style = "width:40px;height:40px;z-index:40;margin-left:40px;" src="file://{images}/custom_game/candy.png"/>';
        //         text += '<Label class = "text_28" style = "font-family:Radiance,FZLanTingHei-R-GBK,TH Sarabun New,YDYGO 540,Gulim,MingLiU;width:100px;text-align:left;text-shadow: 2px 2px 2px #330000;z-index:100;margin-left:90px;line-height:35px;" text = "× '+shop_effect.price+'"/>';
        //     text += '</Panel>';
        // text += '</Panel>';
        // $('#shop_inner').RemoveAndDeleteChildren();
        // $('#shop_inner').BCreateChildren(text);
        
    }

    // 购买特效cb
    if (event == 'buy_effect_cb'){
        var object = data;
        if (object.err == 0){
            $('#ice_storage').text = 'x '+object.candy;
            show_msg($.Localize('buysuccess'));
            refresh_shop();

            GameEvents.SendCustomGameEventToServer( "change_onduty_hero", 
                {
                    'player_id': Players.GetLocalPlayer(),
                    'onduty_hero_new': object.onduty_hero,
                }
            );
        }
        else{
            show_msg('#buyfail');
        }
    }
    // 更换当前棋手cb
    if (event == 'change_zhugong_cb'){
        var object = data;
        if (object.err == 0){
            show_msg('#tips_choose_hero_success');
            refresh_shop();
            close_panel_shop();

            GameEvents.SendCustomGameEventToServer( "change_onduty_hero", 
                {
                    'player_id': Players.GetLocalPlayer(),
                    'onduty_hero_new': object.onduty_hero,
                }
            );
        }
        else{
            show_msg('#tips_choose_hero_fail');
        }
    }
    // 抽扭蛋机cb
    if (event == 'lottery_cb'){
        var object = data;
        if (object.err == 0){
            for (var i=0;i<object.fake.length;i++){
                var fake = object.fake[i].split('_')[0];
                $('#lottery_'+i).style['background-image'] = "url('file://{images}/custom_game/skaters/"+fake+".png')";
                $('#lottery_'+i).style['background-size'] = '100% 100%';
            }
            is_rolling = true;
            $('#go_lottery').SetHasClass('invisible',false);
            var s = Game.EmitSound('ui.treasure_spin');
            $('#lottery_track').style['position'] = "-8100px 0px 0px";
            $.Schedule(5,function(){
                Game.StopSound(s);
                Game.EmitSound('ui.npe_objective_given');
            });

            $.Schedule(6,function(){
                $('#go_lottery').SetHasClass('invisible',true);
                $('#lottery_track').style['transition-duration'] = "0.5s";
                $('#lottery_track').style['position'] = "0px 0px 0px";
                if(!object.award){
                    show_msg($.Localize('lotfailed'));
                }
                else{
                    open_panel_award('dac','chessplayer',object.award,'1','candystore');
                    refresh_shop();
                } 
                $.Schedule(1,function(){
                    is_rolling = false;
                    $('#lottery_track').style['transition-duration'] = "5s";
                })
            })
        }
        else{
            show_msg('#buyfail')
        }
    }
    // 激活激活码cb
    if (event == 'activate_cdkey_cb'){
        var object = data;
        //激活码无效
        if(object.msg == "invalid key"){  
            show_msg($.Localize('invalid_key'));
        }
        //已被激活
        if(object.msg == "already activated"){ 
            show_msg($.Localize('already_activated'));
        }

        //激活成功
        if(object.err == 0){
            if(object.award.test == true){  
                show_msg('内测资格激活成功！');   
            }
            else if(object.award.candy){
                open_panel_award('dac','candy','',object.award.candy,'cdkey');
                refresh_shop()
            }
        }
    }
    // 汰换英雄cb
    if (event == 'recycle_hero_cb'){
        var object = data;
        if (object.err == 0){
            show_msg('#tips_recycle_hero_success');
            refresh_shop();
        }
        else{
            show_msg('#tips_recycle_hero_fail');
        }
    }

    // 集换英雄cb
    if (event == 'jihuan_hero_cb'){
        var object = data;
        if (object.err == 0){
            show_msg('#tips_jihuan_hero_success');
            if (object.award){
                var award_hero = object.award.split('_')[0];
                open_panel_award('dac','chessplayer',award_hero,'1','candystore');
            }
            refresh_shop();
        }
        else{
            show_msg('#tips_jihuan_hero_fail');
        }
    }

    // 排行榜cb
    if (event == 'ranking_top_cb'){
        var aa = data;
        if (aa.err == 0){
            if (!aa || !aa['ranking_info']){
                return;
            }

            var data = aa['ranking_info'];

            for (var j=1;j<=20;j++){
                $("#ranking_top_"+j).SetHasClass('invisible',true);
            }

            for (var i=0;i<data.length;i++){
                $("#ranking_top_"+(i+1)).SetHasClass('invisible',false);
                $("#ranking_top_avatar_"+(i+1)).steamid = data[i].player;
                $("#ranking_top_name_"+(i+1)).steamid = data[i].player;
                if (Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid == data[i].player){
                    $("#ranking_top_"+(i+1)).style['background-color'] = 'rgba(128,128,128,0.1)';
                }
                else{
                    $("#ranking_top_"+(i+1)).style['background-color'] = 'rgba(0,0,0,0.1)';
                }
                $("#ranking_top_level_pic_"+(i+1)).style['background-image'] = "url('file://{images}/custom_game/level_"+data[i].mmr_level+".png')";
                $("#ranking_top_level_text_"+(i+1)).text = $.Localize("text_player_level_"+data[i].mmr_level);
                $("#ranking_top_level_text_"+(i+1)).style['color'] = 'white';
            }
        }
    }
}
var streak_list = [];
function OnWinStreak(keys){
    var streak = keys.streak;
    var player_name = Game.GetPlayerInfo(keys.player_id).player_name;
    streak_list.push({player_name:player_name,streak:streak});
    ShowMsg();
}
function ShowMsg(){
    if (streak_list.length > 0){
        var this_msg = streak_list.shift();
        $('#winstreak').text = (this_msg.player_name+$.Localize('hasgot')+this_msg.streak+$.Localize('winstreak'))
        $('#winstreak').SetHasClass('invisible',false);
        var effects;
        if (this_msg.streak == 5){
            Game.EmitSound("announcer_killing_spree_announcer_kill_mega_01");
            effects = Particles.CreateParticle('particles/econ/events/killbanners/screen_killbanner_compendium14_doublekill.vpcf',6,0)
        }
        if (this_msg.streak == 8){
            Game.EmitSound("announcer_killing_spree_announcer_kill_monster_01");
            effects = Particles.CreateParticle("particles/econ/events/killbanners/screen_killbanner_compendium14_triplekill.vpcf",6,0)
        }
        if (this_msg.streak == 10){
            Game.EmitSound("announcer_killing_spree_announcer_kill_holy_01");
            effects = Particles.CreateParticle("particles/econ/events/killbanners/screen_killbanner_compendium14_rampage.vpcf",6,0)
        }

        $('#winstreak').style['transform'] = 'scale3d( 1.5, 1.5, 1.5)';
        $.Schedule(0.3,function(){
            $('#winstreak').style['transform'] = 'scale3d( 1,1,1)';
        });

        $.Schedule(5,function(){
            Particles.DestroyParticleEffect(effects,true)
            $('#winstreak').SetHasClass('invisible',true);
            ShowMsg();
        })
    }
}
function show_lottery_content(){
    $('#panel_lottery_show').SetHasClass('invisible',false);
}
function hide_lottery_content(){
    $('#panel_lottery_show').SetHasClass('invisible',true);
}

// 发弹幕
function OnBullet(data){
    var steam_id = Game.GetPlayerInfo(data.player_id).player_steamid;
    var player_name = Game.GetPlayerInfo(data.player_id).player_name;
    var text = data.text || '';
    var color = null;
    if (data.win || data.win == 0){
        var oppo = '';
        if (data.win.indexOf && data.win.indexOf('pve_')>=0 ){
            oppo = $.Localize(data.win);
        }
        else{
            oppo = data.cloud_opp_name?$.Localize('cloud_player'):Game.GetPlayerInfo(data.win).player_name;
        }
        text = text + data.score + ' '+ oppo;
        color = '#bbb';
    }
    if (data.draw || data.draw == 0){
        var oppo = '';
        if (data.draw.indexOf && data.draw.indexOf('pve_')>=0 ){
            oppo = $.Localize(data.draw);
        }
        else{
            oppo = data.cloud_opp_name?$.Localize('cloud_player'):Game.GetPlayerInfo(data.draw).player_name;
        }
        text = text + data.score + ' '+ oppo;
        color = '#bbb';
    }
    if (data.lose || data.lose == 0){
        var oppo = '';
        if (data.lose.indexOf && data.lose.indexOf('pve_')>=0 ){
            oppo = $.Localize(data.lose);
        }
        else{
            oppo = data.cloud_opp_name?$.Localize('cloud_player'):Game.GetPlayerInfo(data.lose).player_name;
        }
        text = text + data.score + ' '+ oppo;
        color = '#bbb';
    }
    var target = data.target;
    bullet_chat(steam_id, player_name, text, target, color);
}

function OnSyncHp(data){
    $('#text_player_hp_'+(data.player_id)).text = data.hp+'%';
    if (data.hp <= 0){
        $('#text_player_hp_'+(data.player_id)).text = "FAILED";
        $('#text_player_hp_'+(data.player_id)).style['color'] = '#bbb';
    }
    $('#player_hp_'+(data.player_id)).style['width'] = (data.hp/(data.hp_max||100))*220+'px';
}

function OnPopulation(data){
    if(data.count <= data.max_count){
        $('#population').style['color'] = '#ffffff';
        $('#population').text = data.count+' / '+data.max_count;
    }
    else{
        $('#population').style['color'] = '#ff0000';
        $('#population').text = data.count+' / '+data.max_count;
    }    
}

function OnBattleInfo(data){
    CURR_OPPO = null;

    if (data.type=='prepare'){ // 准备中
        BATTLE_STATUS = 0;

        $('#round_battle').text = $.Localize('pve_preparing');
        $('#round_battle').SetPanelEvent(
            "onactivate", 
            function(){}
        )
        $('#battle_icon').SetHasClass('invisible',true);
        $('#cloud_icon').SetHasClass('invisible',true);
        $('#creep_icon').SetHasClass('invisible',true);
        $('#round_battle').SetHasClass('invisible',false);
        $('#cloud_name').SetHasClass('invisible',true);
    }
    else if (data.type=='pve') { // pve
        BATTLE_STATUS = 1;
        $('#round_battle').text = $.Localize('pve_'+data.text);
        $('#round_battle').SetPanelEvent(
            "onactivate", 
            function(){}
        )
        $('#battle_icon').SetHasClass('invisible',true);
        $('#cloud_icon').SetHasClass('invisible',true);
        $('#creep_icon').SetHasClass('invisible',false);
        $('#round_battle').SetHasClass('invisible',false);
        $('#cloud_name').SetHasClass('invisible',true);
    }
    else if (data.type=='cloud') {
        // 云对战
        BATTLE_STATUS = 3;
        $('#battle_icon').SetHasClass('invisible',true);
        $('#cloud_icon').SetHasClass('invisible',false);
        $('#creep_icon').SetHasClass('invisible',true);
        $('#round_battle').SetHasClass('invisible',true);
        $('#round_battle').SetPanelEvent(
            "onactivate", 
            function(){}
        )
        $('#cloud_name').SetHasClass('invisible',false);
        $('#cloud_name').steamid = data.text;
    }
    else if (data.type=='pvp') {
        // 普通对战
        BATTLE_STATUS = 2;
        $('#battle_icon').SetHasClass('invisible',false);
        $('#cloud_icon').SetHasClass('invisible',true);
        $('#creep_icon').SetHasClass('invisible',true);
        $('#round_battle').SetHasClass('invisible',false);

        CURR_OPPO = parseInt(data.text);
        $('#round_battle').SetPanelEvent(
            "onactivate", 
            function(){
                change_camera_2_player_ground(CURR_OPPO);
            }
        )
        $('#cloud_name').SetHasClass('invisible',true);

        $('#round_battle').text = Players.GetPlayerName(parseInt(data.text)); 
        
    }
    $('#round_info').text = "ROUND "+data.round;
    ROUND = data.round;
}

// function OnPlayerDisconnect(data){
//     $("#outer_player_board_"+data.disconnectid).style["opacity"] = "0.3";
// }

function OnPlayerReconnect(data){
    for (var i=0;i<10;i++) {
        if (Players.GetPlayerHeroEntityIndex(i)){
            heroindex2id[Players.GetPlayerHeroEntityIndex(i)] = i;
        }
    }
    $("#iconlist").style["position"] = "0px 0px 0px";
    $("#outer_player_board_"+data.id).style["opacity"] = "1";
}

var IS_PREVIEW_CD = false;
function preview_effect(goods){
    if (IS_PREVIEW_CD){
        return;
    }
    IS_PREVIEW_CD = true;
    $("#buy_texiao").style['opacity'] = '0.1';
    close_panel_shop();
    GameUI.SetCameraTarget( Players.GetPlayerHeroEntityIndex(   Players.GetLocalPlayer()) );

    GameEvents.SendCustomGameEventToServer( "preview_effect", {"hero_index" : Players.GetPlayerHeroEntityIndex(   Players.GetLocalPlayer()),  "effect" : goods } );
    OnMima({text: 'PREVIEW: '+$.Localize(CURR_SHOP_EFFECT)});
    GameUI.SetCameraDistance(700);

    // $('#ie_welcome_text2').text = 'PREVIEW: '+$.Localize(goods);
    // $("#ie_welcome").style["position"] = "0px 0px 0px";

    $.Schedule(5,function(){
        GameUI.SetCameraDistance(1400);
        GameUI.SetCameraTarget(-1);
        // $("#ie_welcome").style["position"] = "0px -200px 0px";
        show_confirm($.Localize('buyeffect1')+$.Localize(MY_ONDUTY_HERO.split('_')[0])+$.Localize('buyeffect2'),"buy_effect('"+CURR_SHOP_EFFECT+"')");
        $.Schedule(5,function(){
            IS_PREVIEW_CD = false;
            $("#buy_texiao").style['opacity'] = '1';
        });
    });
}


function confirm_jihuan_hero(){
    var jihuan_hero = CURR_SHOP_COLLECT.split('_')[0];
    show_confirm($.Localize('text_confirm_jihuan_hero')+' '+$.Localize(jihuan_hero)+'?',"jihuan_hero()")
}
function jihuan_hero(){
    close_confirm();
    SendHTTP(
        'http://101.200.189.65:431/dac/require/collect/@'+Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid+'@'+CURR_SHOP_COLLECT+'?hehe='+ Math.random(),
        'jihuan_hero_cb'
    )
}

var IS_BULLET_SHOW = true;
$('#img_bullet_toggle_tick').SetHasClass('invisible',false);
function toggle_bullet(){
    if (IS_BULLET_SHOW){
        // 隐藏弹幕
        IS_BULLET_SHOW = false;
        $('#img_bullet_toggle_tick').SetHasClass('invisible',true);
        Game.EmitSound("Shop.PanelUp");
        $('#bulletbox').SetHasClass('invisible',true);
    }
    else{
        // 显示弹幕
        IS_BULLET_SHOW = true;
        $('#img_bullet_toggle_tick').SetHasClass('invisible',false);
        Game.EmitSound("ui.settings_open");
        $('#bulletbox').SetHasClass('invisible',false);
    }
}

function show_collect_part(index){
    if (CURR_SHOP_COLLECT_PARTS[index]){
        var jihuan_name = CURR_SHOP_COLLECT_PARTS[index].split('_')[0];
        $.DispatchEvent( "DOTAShowTextTooltip", $("#img_shop_jihuan_part_"+index), $.Localize(jihuan_name));
    }
}