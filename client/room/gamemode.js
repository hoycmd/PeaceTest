import { Teams, Ui, Build, Inventory, Properties, BreackGraph, BuildBlocksSet, Spawns , msg } from 'pixel_combats/room';
import { Color } from 'pixel_combats/basic';

try {
 
// имена используемых обьектов 
const build = Build.GetContext();
const inventory = Inventory.GetContext();

// разрешения команд
BreackGraph.BreackAll = true;
Ui.GetContext().QuadsCount.Value = true;
build.BlocksSet.Value = BuildBlocksSet.AllClear;
Properties.GetContext().GameModeName = 'GameModes/Peace';
Spawns.GetContext().RespawnTime.Value = 0;
// параметры игрового режима
Ui.GetContext().Hint.Value = 'Hint/BuildBase';
inventory.Main.Value = false, inventory.Secondary.Value = false, inventory.Melee.Value = true, inventory.Explosive.Value = false, inventory.Build.Value = true, inventory.BuildInfinity.Value = true;
Teams.OnRequestJoinTeam.Add(function (p, t) { t.Add(p), p.Spawns.Spawn()});
// создаем модульные функционированные команды 
 const redTeam = CreateNewTeam('Red', '<b><size=85><color=#962605>尺</color><color=#9a040c>ᴇ</color><color=#b8110b>D</color></size></b>', new Color(125/255, 0, 0, 0), 2, BuildBlocksSet.Red);
 const blueTeam = CreateNewTeam('Blue', '<b><size=85><color=#0d177c>ß</color><color=#03088c>l</color><color=#0607b0>ᴜ</color><color=#1621ae>E</color></size></b>', new Color(0, 0, 125/255, 0), 1, BuildBlocksSet.Blue);

 // настройки опции редактора команд
 build.Pipette.Value = true;
 build.BalkLenChange.Value = true;
 build.SetSkyEnable.Value = true;
 build.GenMapEnable.Value = true;
 build.ChangeCameraPointsEnable.Value = true;
 build.QuadChangeEnable.Value = true;
 build.BuildModeEnable.Value = true;
 build.CollapseChangeEnable.Value = true;
 build.RenameMapEnable.Value = true;
 build.ChangeMapAuthorsEnable.Value = true;
 build.LoadMapEnable.Value = true;
 build.ChangeSpawnsEnable.Value = true;

function CreateNewTeam(TeamName, TeamDisplayName, TeamColor, TeamSpawnPointGroup, TeamBuildBlocksSet) {
 Teams.Add(TeamName, TeamDisplayName, TeamColor);
let NewTeam = Teams.Get(TeamName);
 NewTeam.Spawns.SpawnPointsGroups.Add(TeamSpawnPointGroup);
 NewTeam.Build.BlocksSet.Value = TeamBuildBlocksSet;
return NewTeam;
}

} catch (e) {
    msg.Show(`${e.name}: ${e.message} ${e.stack}`);
}



