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

var data =CustomNetTables.GetTableValue( "dac_table", 'end_board' );

$("#endgame_curtain").style['opacity'] = 1;
$("#race_gameover").style['opacity'] = 1;
$("#race_gameover").style['transform'] = 'scale3d( 1, 1, 1);';
Game.EmitSound("valve_dota_001.stinger.radiant_win");

$('#race_gameover').SetHasClass("invisible",false);
var local_id = Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid;
var arr = [];            
for (var d in data.data){
    data.data[d].steamid = d;
    arr.push(data.data[d]);
}
arr.sort(function(a,b){return b.duration-a.duration});

for (var i=0;i<arr.length;i++){
    $("#end_rank_"+(i+1)).SetHasClass("invisible",false);

    if (arr[i].chess_lineup){
        var str = arr[i].chess_lineup;
        // 显示阵容
        var chess_lineup_arr = str.split(',');
        var chess_arr = [];
        // 去除空的和无效的
        for (var j=0;j<chess_lineup_arr.length;j++){
            if (chess_lineup_arr[j]){
                chess_arr.push(chess_lineup_arr[j]);
            }
        }
        //排序
        chess_arr.sort(function(a,b){
            var score_b = 0;
            var score_a = 0;

            if (a.indexOf('11')>-1){
                score_a += 10000;
            }
            if (b.indexOf('11')>-1){
                score_b += 10000;
            }
            if (a.indexOf('1')>-1){
                score_a += 100;
            }
            if (b.indexOf('1')>-1){
                score_b += 100;
            }
            score_a += get_chess_cost(a);
            score_b += get_chess_cost(b);

            return score_b-score_a;
        });
        //显示i的阵容！
        for (var j=0;j<chess_arr.length;j++){
            var chess = chess_arr[j];
            var chess_star = 1;
            if (chess.indexOf('11')>-1){
                chess_star = 3;
                chess = chess.substr(0,chess.length-2);
            }
            if (chess.indexOf('1')>-1){
                chess_star = 2;
                chess = chess.substr(0,chess.length-1);
            }
            var chess_name = CHESS_2_HERO[chess];
            var chess_index = j + 1;

            $("#chess_lineup_"+(i+1)+"_"+chess_index).SetHasClass('invisible',false);
            $("#chess_lineup_"+(i+1)+"_"+chess_index).heroname = chess_name;
            $("#chess_lineup_"+(i+1)+"_"+chess_index).SetHasClass('chess_lineup_chess_big',false);
            $("#chess_lineup_"+(i+1)+"_"+chess_index).SetHasClass('chess_lineup_chess_medium',false);
            $("#chess_lineup_"+(i+1)+"_"+chess_index).SetHasClass('chess_lineup_chess_small',false);
            if (chess_star == 1){
                $("#chess_lineup_"+(i+1)+"_"+chess_index).SetHasClass('chess_lineup_chess_small',true);
            }
            if (chess_star == 2){
                $("#chess_lineup_"+(i+1)+"_"+chess_index).SetHasClass('chess_lineup_chess_medium',true);
            }
            if (chess_star == 3){
                $("#chess_lineup_"+(i+1)+"_"+chess_index).SetHasClass('chess_lineup_chess_big',true);
            }
        }

    }
    


    $("#end_avatar_"+(i+1)).steamid = arr[i].steamid;
    $("#end_player_"+(i+1)).steamid = arr[i].steamid;
    $("#end_player_"+(i+1)).SetHasClass("invisible",false);

    $("#end_level_"+(i+1)).style['background-image'] = 'url("file://{images}/custom_game/level_'+arr[i].mmr_level+'.png")';
    $("#end_level_"+(i+1)).SetHasClass("invisible",false);
    $("#end_level_lbl_"+(i+1)).text = $.Localize('text_player_level_'+arr[i].mmr_level);
    if (arr[i].mmr_level > 0){
        $("#end_level_lbl_"+(i+1)).style['color'] = '#fff';
    }
    else{
        $("#end_level_lbl_"+(i+1)).style['color'] = '#888';
    }
    $('#end_hero_'+(i+1)).style['background-image'] = "url('file://{images}/custom_game/skaters/"+arr[i].zhugong+".png')";
    $("#end_hero_"+(i+1)).SetHasClass("invisible",false);
    $("#end_wave_"+(i+1)).text = arr[i].round;
    $("#end_win_"+(i+1)).text = arr[i].win_round+'-'+arr[i].lose_round;
    $("#end_kill_"+(i+1)).text = arr[i].kills;
    $("#end_death_"+(i+1)).text = arr[i].deaths;
    var h = Math.floor(arr[i].duration/3600);
    var m = Math.floor((arr[i].duration - 3600*h)/60);
    var s = arr[i].duration - 3600*h - 60*m;
    $("#end_duration_"+(i+1)).text = (h<10?'0'+h:h)+':'+(m<10?'0'+m:m)+':'+(s<10?'0'+s:s);

    if (arr[i].candy){
        $('#panel_end_board_award_'+(i+1)).SetHasClass('invisible',false);
        $('#text_end_board_award_'+(i+1)).text = '× '+arr[i].candy;
    }
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