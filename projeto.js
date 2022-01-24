const prompt = require('prompt-sync')();
let nome = prompt('Qual o seu nome?: ');
let contS=0;
console.log(`[Yashiro]: Bem-vindo, ${nome}! Meu nome é Yashiro e serei o personagem que você irá guiar!
Estamos nesse momento em Iônia. O país está em ruínas devido a guerra contra Noxus...
Sinceramente, escapei por pouco. Perdi minha espada na batalha contra Darius e só fui salvo graças
a tempestade de vento... `);
        console.log(); 
        
let decisao = '';
let upDecisao = decisao.toUpperCase();
        
    while(upDecisao!='S' || upDecisao!= 'N'){
                let decisao = prompt(`[Yashiro]: ${nome}, deseja ir buscar minha espada? (Use S para sim ou N para nao):`);
                let upDecisao = decisao.toUpperCase();
        if(upDecisao=='s'.toUpperCase()){
                console.log();
                console.log('[Narrador]:Depois de uma longa caminhada com sol escaldante, animais perigosos e dunas sem fim...');
                console.log();
                console.log('[Yashiro]: Chegamos!!');
                console.log();
                console.log('[Yashiro mexe nos baús]')
                console.log();
                console.log('[Yashiro]: PER FEI TO! Achei a espada!')
                contS++;
            }
        else if(upDecisao=='n'.toUpperCase()){
                console.log();
                console.log(`[Yashiro]: ${nome}, minha espada é minha alma! Porém, vamos continuar na luta!`);
                console.log();
        }
        if(upDecisao=='S'|| upDecisao=='N'){break;}
        }
                let decisao1 = '';
                let upDecisao1 = decisao1.toUpperCase();

    while(upDecisao1!='S' || upDecisao1!= 'N'){
                let decisao1 = prompt(`[Yashiro]: ${nome}, Vamos atrás de mantimentos? (Use S para sim ou N para nao):`);
                let upDecisao1 = decisao1.toUpperCase();
        if(upDecisao=='S'|| upDecisao=='N'){
                break;}
        
        if(upDecisao1=='s'.toUpperCase()){
                console.log();
                console.log('[Yashiro]: Ótimo! Assim fico melhor de enfrentar aquele carrasco!');
                console.log();
                contS++;
            }
        else if(upDecisao1=='n'.toUpperCase()){
                console.log();
                console.log(`[Yashiro]: ${nome}, SEM ESPADA E SEM MANTIMENTOS?! Você tem certeza? Bom, vamos continuar!`);
                console.log();
                console.log('[Narrador]: você colhe o que planta... cuidado nas decisões!')
                console.log();
            }

        if(upDecisao1=='S'|| upDecisao1=='N'){
                break;}
        }
                console.log(`[Narrador]: Yashiro sai em busca de Darius para livrar seu país da devastação...`);
                console.log();
                console.log(`[Narrador]:Yashiro passa por arbustos e acha dois caminhos. Um é pela ponte e o outro é um pântano!`)
                console.log();

                let decisao2 = '';
                let upDecisao2 = decisao2.toUpperCase();
    while(upDecisao2!='S' || upDecisao2!= 'N'){
                let decisao2 = prompt(`[Yashiro]: ${nome}, Vamos pela ponte que é segura? (Use S para sim ou N para nao):`);
                let upDecisao2 = decisao2.toUpperCase();
        if(upDecisao2=='s'.toUpperCase()){
                console.log();
                console.log(`[Yashiro]: Sábia decisão, ${nome}! Vamos em frente! `);
                console.log();
                contS++;
            }
        else if(upDecisao2=='n'.toUpperCase()){
                console.log();
                console.log(`[Yashiro]: ${nome}, o pântano é complicado, nao tenho antídoto para o veneno de alguns animais da área!`);
                console.log();
                console.log('[Narrador]: Não sou o mestre dos magos, mas vou te dar um conselho... Você está por um FIO!');
                
            }
        if(upDecisao2=='S'|| upDecisao2=='N'){
                break;}
        }
                 console.log();
                 console.log('[Narrador]: Após passar pelo caminho, Yashiro se depara com um baú! ');
                 console.log();
                 console.log(`[Yashiro]: Isso é incrível!`);
                 console.log();
                let decisao3 = '';
                let upDecisao3 = decisao3.toUpperCase();
    while(upDecisao3!='S' || upDecisao3!= 'N'){
                let decisao3 = prompt(`[Yashiro]: ${nome}, Vamos abrir? (Use S para sim ou N para nao):`);
                let upDecisao3 = decisao3.toUpperCase()
            if(upDecisao3=='s'.toUpperCase()){
                console.log();
                console.log(`[Narrador]: Yashiro abre o baú.`);
                console.log();
                console.log(`[Yashiro]: Demos muita sorte! Achei um fio de anjo, ele me deixará invisível por alguns segundos!`)
                console.log();
                contS++;
            }
            else if(upDecisao3=='n'.toUpperCase()){
                console.log();
                console.log(`[Yashiro]: ${nome}, nâo consigo medir se você está com medo ou só é b.... BONITO, eu quis dizer BONITO!`);
                console.log();
                console.log(`[Narrador]: ${nome}, só entre nós... Você não gosta do Yashiro?!`);
                
            }
            if(upDecisao3=='S'|| upDecisao3=='N'){
                break;}
        }
                console.log();
                console.log('[Narrador]: Com as decisões boas ou ruins, estamos chegando ao final da saga de Yashiro!');
                console.log();
                console.log('[Narrador]: Yashiro seguiu em frente e encontrou onde Darius está!');
                console.log();
                console.log(`[Yashiro]: Achei esse VERME... Agora é com você, ${nome}!`);
                console.log();
                let decisao4 = '';
                let upDecisao4 = decisao4.toUpperCase();
    while(upDecisao4!='S' || upDecisao4!= 'N'){
                let decisao4 = prompt(`[Yashiro]: Vamos furtivamente? (Use S para sim ou N para nao):`);
                let upDecisao4 = decisao4.toUpperCase();
            
            if(upDecisao4=='s'.toUpperCase()){
                console.log();
                console.log(`[Narrador]: Yashiro usa suas habilidades e embosca Darius!`);
                console.log();
                console.log(`HASAKIII - SURIEGUEDOOOON`);
                console.log();
                contS++;
            }
            else if(upDecisao4=='n'.toUpperCase()){
                console.log();
                console.log(`[Yashiro]: ${nome}, Você quer que eu vá pela frente então.. OKAY!`);
                console.log();
                console.log(`HASAKIII - SURIEGUEDOOOON`);
                console.log();
            
            }
            if(upDecisao4=='S'|| upDecisao4=='N'){
                break;}
        }
                console.log();
                console.log(`[Narrador]: ${nome} agora as suas decisões serão julgadas!`);
                console.log();
if(contS==0){
         console.log(`[Narrador]: ${nome}, infelizmente suas decisões foram falhas e Yashiro morreu em batalha.`);
        }
 else if(contS>=1 && contS<=2){
         console.log(`[Narrador]: ${nome}, suas decisões levaram Yashiro ao fracasso, mas ele sai vivo. `);
        }
else if(contS===3){
         console.log(`[Narrador]: ${nome}, você quase conseguiu guiar Yashiro a vitória. Boa sorte na próxima! `);
        }
 else if(contS===4){
        console.log(`[Narrador]: ${nome}, Você guiou muito bem o Yashiro! Mesmo assim, faltou algo para vencer Darius... `)
        }
else if(contS===5){
         console.log(`[Narrador]: ${nome}, MUITO BEM! Você foi INCRÍVEL! Guiou Yashiro da melhor forma e salvou Iônia! `)
        }
    
