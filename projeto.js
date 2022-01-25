const prompt = require('prompt-sync')();
console.log(`Saudações, Invocador! Bem-vindo a história de Yashiro!`);
console.log(`Greetings, Summoner! Welcome to Yashiro's story!`);
console.log(`Digite o seu nome`);
let nome = prompt('Enter your name: ');
console.log(`Temos duas opções de linguagem.`);
console.log(`Temos duas opções de idioma.`);
let ling = '';
let cont= 0;
let contP=0;
let decisao ='';
let decisao1='';
let decisao2='';
let decisao3='';
let decisao4='';
while(ling!='BR' || ling!='ENG'){
        console.log(`Somente [BR] ou [ENG] são aceitos como opção!`);
        ling=prompt(`Only [BR] or [ENG] are accepted as an option!:`);
        if(ling=='BR' || ling=='ENG'){
                break;
        }
}
while(cont<5){
                if(ling=='BR'){
                console.log('*JOGO EM PORTUGUÊS - PT-BR*')

                console.log(`[Yashiro]: Bem-vindo, ${nome.trim().split()}! Meu nome é Yashiro e serei o personagem que você irá guiar!
Estamos nesse momento em Iônia. O país está em ruínas devido a guerra contra Noxus...
Sinceramente, escapei por pouco. Perdi minha espada na batalha contra Darius e só fui salvo graças
a tempestade de vento... `);
                console.log();

                while(decisao!='S' || decisao!= 'N'){
                decisao = prompt(`[Yashiro]: ${nome}, deseja ir buscar minha espada? (Use [S] para sim ou [N] para não):`);
                decisao.toUpperCase().trim()
                if(decisao=='S'){
                console.log();
                console.log('[Narrador]:Depois de uma longa caminhada com sol escaldante, animais perigosos e dunas sem fim...');
                console.log();
                console.log('[Yashiro]: Chegamos!!');
                console.log();
                console.log('[Yashiro mexe nos baús]')
                console.log();
                console.log('[Yashiro]: PER FEI TO! Achei a espada!')
                contP++;
                cont++;

                }else if(decisao=='N'){
                console.log();
                console.log(`[Yashiro]: ${nome}, minha espada é minha alma! Porém, vamos continuar na luta!`);
                console.log(); 
                cont++;  
                 }
                 if(decisao=='S'|| decisao=='N'){break;}
                 }
        while(decisao1!='S' || decisao1!= 'N'){
                decisao1 = prompt(`[Yashiro]: ${nome}, Vamos atrás de mantimentos? (Use [S] para sim ou [N] para não):`);                     
                if(decisao1=='S'){
                console.log();
                console.log('[Yashiro]: Ótimo! Assim fico melhor de enfrentar aquele carrasco!');
                console.log();
                contP++;
                cont++;
                }
                else if(decisao1=='N'){
                console.log();
                console.log(`[Yashiro]: ${nome}, S... SE.. SEM MANTIMENTOS?! Você tem certeza? Bom, vamos continuar!`);
                console.log();
                console.log('[Narrador]: você colhe o que planta... cuidado nas decisões!')
                console.log();
                cont++;
                }
                if(decisao1=='S'|| decisao1=='N'){break;}
                }
                console.log(`[Narrador]: Yashiro sai em busca de Darius para livrar seu país da devastação...`);
                console.log();
                console.log(`[Narrador]:Yashiro passa por arbustos e acha dois caminhos. Um é pela ponte e o outro é um pântano!`)
                console.log();

        while(decisao2!='S' || decisao2!= 'N'){
                decisao2 = prompt(`[Yashiro]: ${nome}, Vamos pela ponte que é segura? (Use [S] para sim ou [N] para não):`);
                        
                if(decisao2=='S'){
                        console.log();
                        console.log(`[Yashiro]: Sábia decisão, ${nome}! Vamos em frente! `);
                        console.log();
                        contP++;
                        cont++;
                }
                else if(decisao2=='N'){
                        console.log();
                        console.log(`[Yashiro]: ${nome}, o pântano é complicado, nao tenho antídoto para o veneno de alguns animais da área!`);
                        console.log();
                        console.log('[Narrador]: Não sou o mestre dos magos, mas vou te dar um conselho... Você está por um FIO!');
                        cont++;
                }
                if(decisao2=='S'|| decisao2=='N'){break;}
                } 
                console.log();
                console.log('[Narrador]: Após passar pelo caminho, Yashiro se depara com um baú! ');
                console.log();
                console.log(`[Yashiro]: Isso é incrível!`);
                console.log();

        while(decisao3!='S' || decisao3!= 'N'){
                decisao3 = prompt(`[Yashiro]: ${nome}, Vamos abrir? (Use [S] para sim ou [N] para não):`);
                if(decisao3=='S'){
                        console.log();
                        console.log(`[Narrador]: Yashiro abre o baú.`);
                        console.log();
                        console.log(`[Yashiro]: Demos muita sorte! Achei um fio de anjo, ele me deixará invisível por alguns segundos!`)
                        console.log();
                        contP++;
                        cont++;
                }
                else if(decisao3=='N'){
                        console.log();
                        console.log(`[Yashiro]: ${nome}, nâo consigo medir se você está com medo ou só é b.... BONITO, eu quis dizer BONITO!`);
                        console.log();
                        console.log(`[Narrador]: ${nome}, só entre nós... Você não gosta do Yashiro?!`);
                        cont++;
                        
                }
                if(decisao3=='S'|| decisao3=='N'){break;}
                }
                console.log('[Narrador]: Com as decisões boas ou ruins, estamos chegando ao final da saga de Yashiro!');
                console.log();
                console.log();
                console.log('[Narrador]: Yashiro seguiu em frente e encontrou onde Darius está!');
                console.log();
                console.log(`[Yashiro]: Achei esse VERME... Agora é com você, ${nome}!`);
                console.log();

         while(decisao4!='S' || decisao4!= 'N'){
                decisao4 = prompt(`[Yashiro]: Vamos furtivamente? (Use [S] para sim ou [N] para não):`);  
                if(decisao4=='S'){
                        console.log();
                        console.log(`[Narrador]: Yashiro usa suas habilidades e embosca Darius!`);
                        console.log();
                        console.log(`HASAKIII - SURIEGUEDOOOON`);
                        console.log();
                        contP++;
                        cont++;
                }
                else if(decisao4=='N'){
                        console.log();
                        console.log(`[Yashiro]: ${nome}, Você quer que eu vá pela frente então.. OKAY!`);
                        console.log();
                        console.log(`HASAKIII - SURIEGUEDOOOON`);
                        console.log();
                        cont++;
                    
                }
                if(decisao4=='S'|| decisao4=='N'){break;}
                }

                console.log();
                console.log(`[Narrador]: ${nome} agora as suas decisões serão julgadas!`);
                console.log();
if(contP==0){
         console.log(`[Narrador]: ${nome}, infelizmente suas decisões foram falhas e Yashiro morreu em batalha.`);
        }
 else if(contP>=1 && contP<=2){
         console.log(`[Narrador]: ${nome}, suas decisões levaram Yashiro ao fracasso, mas ele sai vivo. `);
        }
else if(contP===3){
         console.log(`[Narrador]: ${nome}, você quase conseguiu guiar Yashiro a vitória. Boa sorte na próxima! `);
        }
 else if(contP===4){
        console.log(`[Narrador]: ${nome}, Você guiou muito bem o Yashiro! Mesmo assim, faltou algo para vencer Darius... `)
        }
else if(contP===5){
         console.log(`[Narrador]: ${nome}, MUITO BEM! Você foi INCRÍVEL! Guiou Yashiro da melhor forma e salvou Iônia! `)
        }
        console.log();
        console.log(`*Obrigado por jogar! Dúvidas, melhorias e elogios: kellbberbarcarolo@gmai.com!* `) 
        console.log();             
 }
        else{
                console.log('GAME IN ENGLISH- EUA');       
                console.log(`[Character]: Welcome, ${nome}! My name is Yashiro and I am the character you will guide!
We are currently in Ionia. The country is in ruins due to the war against Noxus...
Honestly, I barely escaped. I lost my sword in the battle against Darius and I was only saved thanks to
the wind storm... `);
                console.log(); 

        while(decisao!='Y' || decisao!= 'N'){
                decisao = prompt(`[Yashiro]: ${nome}, do you want to go take my sword? (Use [Y] for YES or [N] for NO):`);    
                if(decisao=='Y'){
                    console.log();
                    console.log('[Narrator]:After a long walk in the scorching sun, among dangerous animals and endless dunes...');
                    console.log();
                    console.log('[Yashiro]: We arrived!!');
                    console.log();
                    console.log('[rummaging through the boxes]')
                    console.log();
                    console.log('[Yashiro]: PER-FECT! I found my sword!')
                    contP++;
                    cont++;
                }
                else if(decisao=='N'){
                        console.log();
                        console.log(`[Yashiro]: ${nome}, my sword is my soul! However, we will continue the fight!`);
                        console.log();
                        cont++;
                }
                if(decisao=='Y'|| decisao=='N'){break;}           
                }
        while(decisao1!='Y' || decisao1!= 'N'){
                decisao1 = prompt(`[Yashiro]: ${nome}, Shall we look for food? (Use [Y] for YES or [N] for NO):`);  
                if(decisao1=='Y'){
                        console.log();
                        console.log('[Yashiro]: Great! it will be easy to face that bastard!');
                        console.log();
                        contP++;
                        cont++;
                }
                else if(decisao1=='N'){
                        console.log();
                        console.log(`[Yashiro]: ${nome}, No food? Are you sure? ok, let's continue...!`);
                        console.log();
                        console.log('[Narrator]: you reap what you sow...be careful with your decisions!')
                        console.log();
                        cont++;
                }
                if(decisao1=='Y'|| decisao1=='N'){break;}   
                }

        console.log(`[Narrator]: Yashiro sets out to find Darius to rid his country of devastation...`);
        console.log();
        console.log(`[Narrator]: Yashiro passes through bushes and finds two paths. One is on through a bridge and the other is a swamp!`)
        console.log();

        while(decisao2!='Y' || decisao2!= 'N'){
                decisao2 = prompt(`[Yashiro]: ${nome}, Shall we cross the bridge, which is safer? (Use [Y] for YES or [N] for NO):`);
                if(decisao2=='Y'){
                        console.log();
                        console.log(`[Yashiro]: Wise decision, ${nome}! let's go ahead! `);
                        console.log();
                        contP++;
                        cont++;
                }
                else if(decisao2=='N'){
                        console.log();
                        console.log(`[Yashiro]: ${nome}, the swamp is complicated, I don't have an antidote for the venom of some animals in the region!`);
                        console.log();
                        console.log(`[Narrator]: Im not the master mage, but I'll give you some advice... You're in trouble!!`);
                        cont++;
                }
                if(decisao2=='Y'|| decisao2=='N'){break;} 
                }
        console.log();
        console.log('[Narrator]: After going through the path, Yashiro comes across a chest!! ');
        console.log();
        console.log(`[Yashiro]: this is amazing!`);
        console.log();
        while(decisao3!='Y' || decisao3!= 'N'){
                decisao3 = prompt(`[Yashiro]: ${nome}, Shall we open the chest?? (Use [Y] for YES or [N] for NO):`);
                if(decisao3=='Y'){
                    console.log();
                    console.log(`[Narrador]: Yashiro opened the box.`);
                    console.log();
                    console.log(`[Yashiro]: We got very lucky! I found an angel thread, it will make me invisible for a few seconds!`)
                    console.log();
                    contP++;
                    cont++;
                }
                else if(decisao3=='N'){
                        console.log();
                        console.log(`[Yashiro]: ${nome}, I can't tell if you're scared or just stu.... STUPENDOUS, I was going to say Stupendous!`);
                        console.log();
                        console.log(`[Narrator]: ${nome}, between us, don't you like him??!`);
                        cont++;
                }
                if(decisao3=='Y'|| decisao3=='N'){break;} 
                }
        console.log(`[Narrator]: With decisions good or bad, we're coming to the end of Yashiro's saga!`);
        console.log();
        console.log('[Narrator]: Yashiro went ahead and found where Darius is!');
        console.log();
        console.log(`[Yashiro]: I found this stupid... Now it's up to you, ${nome}!`);
        while(decisao4!='Y' || decisao4!= 'N'){

                decisao4 = prompt(`[Yashiro]: Shall we sneak?? (Use [Y] for YES or [N] for NO:`);
                if(decisao4=='y'.toUpperCase()){
                console.log();
                console.log(`[Narrator]: Yashiro uses his abilities and ambushes Darius`);
                console.log();
                console.log(`HASAKIII - SURIEGUEDOOOON`);
                console.log();
                contP++;
                cont++;
                }
                else if(decisao4=='N'){
                    console.log();
                    console.log(`[Yashiro]: ${nome}, You want me to go ahead then... OKAY!`);
                    console.log();
                    console.log(`HASAKIII - SURIEGUEDOOOON`);
                    console.log();
                }
                if(decisao4=='Y'|| decisao4=='N'){break;} 
                }
        console.log();
        console.log(`[Narrator]: ${nome} now your decisions will be judged!`);
        console.log();
                if(contP==0){
                console.log(`[Narrator]: ${nome}, unfortunately his decisions were flawed and Yashiro died in battle.`);
                }
                else if(contP>=1 && contP<=2){
                console.log(`[Narrator]: ${nome},  his decisions lead to Yashiro's failure, but he makes it out alive. `);
                }
                else if(contP===3){
                console.log(`[Narrator]: ${nome}, you almost managed to guide Yashiro to victory. Good luck next time! `);
                }
                else if(contP===4){
                console.log(`[Narrator]: ${nome},  you guided Yashiro very well! Still, something was missing to defeat Darius...`)
                }
                else if(contP===5){
                console.log(`[Narrator]: ${nome}, VERY GOOD! You were amazing! Guided Yashiro in the best way and saved Ionia!! `)
                }
                console.log();
        console.log(`*Thanks for playing! Questions, improvements and compliments: kellbberbarcarolo@gmai.com!* `) 
        console.log();
                }
                }  
