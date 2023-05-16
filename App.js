import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image, Linking} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const images = [
  { text: 'Treino de iniciante', source: { uri: 'https://i.imgur.com/SUA3e0G.png' }, workoutType: 'first', gif: 'https://media.giphy.com/media/1Mng6X9UFP1Ql6W8uV/giphy.gif', textDetails: 'Aqui estão algumas dicas de treino para pernas.' },
  { text: '(A) Perna e core', source: { uri: 'https://i.imgur.com/Ob2dKZg.png' }, workoutType: 'legs', gif: 'https://media.giphy.com/media/1Mng6X9UFP1Ql6W8uV/giphy.gif', textDetails: 'Aqui estão algumas dicas de treino para pernas.' },
  { text: '(B) Costas e bíceps', source: { uri: 'https://i.imgur.com/VX6JgHp.png' }, workoutType: 'biceps', gif: 'https://media.giphy.com/media/3o7TKJh4gE4wW6s8YI/giphy.gif', textDetails: 'Aqui estão algumas dicas de treino para bíceps.' },
  { text: '(C) Perna 2', source: { uri: 'https://i.imgur.com/BY8svYT.png' }, workoutType: 'chest', gif: 'https://media.giphy.com/media/5xtDarEbygs3Pu7Xxqk/giphy.gif', textDetails: 'Aqui estão algumas dicas de treino para peito.' },
  { text: '(D) Peito, ombros e tríceps', source: { uri: 'https://i.imgur.com/TN7wVO5.png66' }, workoutType: 'back', gif: 'https://media.giphy.com/media/l4FGJxUflsH3vYR4g/giphy.gif', textDetails: 'Aqui estão algumas dicas de treino para costas.' },
  { text: '(E) Perna e glúteos', source: { uri: 'https://i.imgur.com/ZdwpLko_d.webp?maxwidth=760&fidelity=grand' }, workoutType: 'leg', gif: 'https://media.giphy.com/media/l4FGJxUflsH3vYR4g/giphy.gif', textDetails: 'Aqui estão algumas dicas de treino para costas.' },
];

const Card = ({ title, description, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image4} />
      <View style={styles.textContainer}>
        <Text style={styles.title3}>{title}</Text>
        <Text style={styles.description3}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

function WelcomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FF1691', paddingBottom: 20, }}> 

      <Image style={styles.image1} source={require('./assets/logo.png')} />

      <Text style={{ color: '#FFF', fontSize: 25, fontWeight: '800', bottom: 0, alignSelf: 'center' }}>Bem-vindos!</Text>

      <TouchableOpacity 
           onPress={() => {
            const url = 'https://t.me/+U0xf0g8beNc3YWI5';
            Linking.openURL(url);
          }}
          style={{
            backgroundColor: '#00FF00',
            borderRadius: 20,
            padding: 10,
            width: 280,
            height: 60,
            alignItems: 'center',
            bottom: -20,
          }}
        >
        <Text style={{ color: '#FF1691', top: 10, fontWeight: 'bold', fontSize: 15,}}>Acesso ao grupo Fitness!</Text>
      </TouchableOpacity>

      <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}
          style={{
            backgroundColor: '#00FF00',
            borderRadius: 20,
            padding: 10,
            marginTop: 20,
            width: 280,
            height: 60,
            alignItems: 'center',
            bottom: -20,
          }}
        >
        <Text style={{ color: '#FF1691', top: 10, fontWeight: 'bold', fontSize: 15,}}>Planejamento 7 Semanas</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
           onPress={() => {
            const url = 'https://pay.kiwify.com.br/oq9syrN';
            Linking.openURL(url);
          }}
          style={{
            backgroundColor: '#00FF00',
            borderRadius: 20,
            padding: 10,
            marginBottom: 15,
            width: 280,
            height: 60,
            alignItems: 'center',
            bottom: -40,
          }}
        >
        <Text style={{ color: '#FF1691', top: 10, fontWeight: 'bold', fontSize: 15,}}>Receita Fitness</Text>
      </TouchableOpacity>


      <View style={{padding: 10, borderRadius: 10, marginHorizontal: 0, marginTop: 40, borderWidth: 3, borderColor: '#00FF00', marginBottom: -40, paddingBottom: -80,}}>
        <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginBottom: 20, bottom: -5, }}>
        PROMOÇÃO DE LANÇAMENTO
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 30 }}>
        <Text style={{ color: '#00FF00', fontSize: 28, fontWeight: 'bold', marginRight: 10, bottom: 5, left: 150, }}>R$9,90</Text>
        <Text style={{ color: '#7AFF7A', fontSize: 16, textDecorationLine: 'line-through', bottom: 5, left: 150,}}>R$29,90</Text>
        <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginBottom: 20, bottom: -40, right: 75, }}>
        QUALQUER MÓDULO ABAIXO  ⬇️
        </Text>
        </View>
      </View>


      <ScrollView horizontal>
      <Card
        title="Toda Definida"
        description="Exercícios para definir o corpo todo, com itens simples, que todo mundo tem em casa."
        image={require("./assets/foto1.png")}
        onPress={() => {
          const url = 'https://pay.kiwify.com.br/xOd467t';
          Linking.openURL(url);
        }}
      />
      <Card
        title="40 + Fit"
        description="Aulas desenvolvidas especialmente para mulheres entre 40 e 55 anos queimarem gordura localizada e tonificar a musculatura"
        image={require('./assets/foto2.png')}
        onPress={() => {
          const url = 'https://pay.kiwify.com.br/gOfEYxQ';
          Linking.openURL(url);
        }}
      />
      <Card
        title="Mamãe Sarada"
        description="Volte a ter o corpo de antes da gravidez com apenas 14 minutos por dia em casa."
        image={require('./assets/foto3.png')}
        onPress={() => {
          const url = 'https://pay.kiwify.com.br/97y5sre';
          Linking.openURL(url);
        }}
      />
      <Card
        title="Método Afina Cintura"
        description="Fortaleça e devolva a tônus da musculatura mais profunda do abdômen, diminuindo estômago alto, pochete e afinando sua cintura"
        image={require('./assets/foto4.png')}
        onPress={() => {
          const url = 'https://pay.kiwify.com.br/oEEhXFO';
          Linking.openURL(url);
        }}
      />
      <Card
        title="Power ABS"
        description="Queime gordura abdominal e defina todos os músculos do abdômen através de uma metodologia exclusiva"
        image={require('./assets/foto5.png')}
        onPress={() => {
          const url = 'https://pay.kiwify.com.br/KEShaTX';
          Linking.openURL(url);
        }}
      />
    </ScrollView>

    </ScrollView>
  );
}

function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Olá, vamos treinar!</Text>
        <Text style={styles.headerPara}>Escolha seu treino!</Text>
      </View>
      {images.map((image, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('Details', { workoutType: image.workoutType })}
        >
          <View style={styles.imageContainer}>
           <ImageBackground style={[styles.image, { borderRadius: 20 }]} source={image.source}>
              <Text style={styles.text}>{image.text}</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      ))}
      <Text style={styles.finalizar}>Ao finalizar o 5° dia (treino E) você deverá retornar e fazer o treino (A) no dia seguinte e assim por diante.</Text>
    </ScrollView>
  );
}

function DetailsScreen({ route }) {
  const { workoutType } = route.params;

  return (
    <View style={styles.container}>

    {workoutType === 'first' && (
         <ScrollView contentContainerStyle={styles.perna} showsVerticalScrollIndicator={false} >

          <Text style={styles.perna2}>PERNA (ÊNFASE QUADRÍCEPS) E ABDÔMEN</Text>

          <View style={styles.container2}>

            <Text style={styles.detailsText}>Cadeira Abdutora.</Text>
            <Text style={styles.repeticoes}>3 séries com 15 repetições.</Text>
            <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2VhMjJiZWM5ZGZhNDM1MzA3ZDI2ZDI4MjRlZDRlYjMzZjVhMjgzYyZjdD1n/ZVGKUZNNae2lHtktQ6/giphy-downsized-large.gif' }} style={styles.gif} />

          </View>

          <View style={styles.container2}>

            <Text style={styles.detailsText}>Agachamento Livre.</Text>
            <Text style={styles.repeticoes}>5 séries com 15 repetições.</Text>
            <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjEzOTA4Y2QxMWFjZDA4YjI0NDQ4YzZkN2IyNzIwZGRkMjQ4YWEwYSZjdD1n/gWr3aYEo0fhTFSa6oO/giphy-downsized-large.gif' }} style={styles.gif} />

          </View>

          <View style={styles.container2}>

            <Text style={styles.detailsText}>Cadeira Extensora.</Text>
            <Text style={styles.repeticoes}>4 séries com drop set.</Text>
            <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWRmMjc5NmJhMGM3M2E3MGZiODVmZDU1MTcyMjZkYmMyZjBhOTc2ZiZjdD1n/IrYMprv77VgezkTAvy/giphy-downsized-large.gif' }} style={styles.gif} />

          </View>

          <View style={styles.container2}>

            <Text style={styles.detailsText}>Cadeira Flexora.</Text>
            <Text style={styles.repeticoes}>4 séries com 10 repetições.</Text>
            <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDViNGZhYWQyNWQ3ODg4MjM5YjFhNTFiYjMzZTI5MjM1MDBhNGJiZiZjdD1n/CAaq5mG82l26j6FVd8/giphy-downsized-large.gif' }} style={styles.gif} />

          </View>

           <View style={styles.container2}>

            <Text style={styles.detailsText}>Leg Press Unilateral.</Text>
            <Text style={styles.repeticoes}>4 séries com 10 repetições.</Text>
            <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmVhOTU0MDA1ZTJmOWNkNmEyOGJmODVlMjFlYjQ5MmQ0ODJmZWRmOCZjdD1n/qHVwvE3sKbE5P8qbGP/giphy-downsized-large.gif' }} style={styles.gif} />

          </View>

          <View style={styles.container2}>

            <Text style={styles.detailsText}>Panturrilha máquina.</Text>
            <Text style={styles.repeticoes}>4 séries com 15 repetições.</Text>
            <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGE5YjZmMzA0MGM4ZGFlZDlkZDFmOWEyNmM2YjZjOGVlY2MwYmQxNiZjdD1n/luacQrdCPt3CtT1ubi/giphy-downsized-large.gif' }} style={styles.gif} />

          </View>

          <View style={styles.container2}>

            <Text style={styles.detailsText}>Abdominal supra solo.</Text>
            <Text style={styles.repeticoes}>4 séries com 15 repetições.</Text>
            <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTVjZjJhYTFmZDExYWQ1YmI1ZWVmMjllZjYxNmE2MGM4ZWZlOWVjMCZjdD1n/NDwx0cuMh9PE7nG4e1/giphy.gif' }} style={styles.gif} />

          </View>

          <View style={styles.container2}>

            <Text style={styles.detailsText}>Cardio.</Text>
            <Text style={styles.repeticoes}>Esteira 20min (velocidade mínima 4km/h).</Text>
            <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGRhMDZmYTc4YmQ2MGI0NTA0Y2E0OGU2MzdhMWM5MTBkYWM0MTUzMSZjdD1n/kH84wLBChp5qd6VU2K/giphy.gif' }} style={styles.gif} />

          </View>

          <Text style={styles.perna2}> (B) SUPERIORES E CORE</Text>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Puxada com a barra romana.</Text>
          <Text style={styles.repeticoes}>5 séries com 10 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzVhNmQyNGMzYzkyMTlkN2IyMzNiNDEyZjdiOGVhMzM1ZDI1Y2NjZiZjdD1n/MrWS80mufwp50eLVZU/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Puxada inversa com barra reta.</Text>
          <Text style={styles.repeticoes}>4 séries com drop set.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDkxMDQxMTkyY2E3Y2VkYWM5NjI1NzUxYTBiN2Q5N2M4ZTc4OTgyNiZjdD1n/5eeHltVt9XNkOpwzcj/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Supino reto com halteres.</Text>
          <Text style={styles.repeticoes}>4 séries com 10 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDY2YTkyNmM1MWIzNWU5N2VhZTk0NDZiNzkyY2Q2NGUzY2Y5ZmVkNiZjdD1n/8A8aDQXleT3jZ6K1m9/giphy.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Tríceps corda.</Text>
          <Text style={styles.repeticoes}>4 séries com 10 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTYwYTQ1YWMxMTU1NGFiZDI2YjI3ODNhZDZkMzJmNjljMTExYWRkNSZjdD1n/2KFaHGi9B2mBGUKB78/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

         <View style={styles.container2}>

          <Text style={styles.detailsText}>Rosca alternada.</Text>
          <Text style={styles.repeticoes}>4 séries com 10 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWIzNjRjODY3MmI3MmRjMzM0NTljZDc2NjZlMzI0MjM0OThiYjY4MSZjdD1n/7jwVkoQOxysIPJGZEe/giphy.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>BI-SET/ Elevação frontal + elevação lateral com halter.</Text>
          <Text style={styles.repeticoes}>3 séries com 15 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDUxNWM0OTQ4YjFlMTU4MTRmMDQ3MzVjOWNkZThlMDU5ODg4ZTVmYyZjdD1n/aUlec0l8QQpyMu98N4/giphy-downsized-large.gif' }} style={styles.gif} />
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTYwMGRmNjNhZDM3OTMxODNlNDc3OTIyMDQzMTlmM2MzZDc3Y2RjMSZjdD1n/XKonDe2cd7iLhayu7x/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Prancha isométrica.</Text>
          <Text style={styles.repeticoes}>4 séries com 30 segundos.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjI4NDkxYjk5NmI5NTYxMTY1YzRkN2MwOTc4ZmQxNzk3YjJjOWM4YiZjdD1n/Kmgu4LZA3RBCaW5JQw/giphy.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Cardio.</Text>
          <Text style={styles.repeticoes}>Esteira 20min (velocidade mínima 4km/h).</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGRhMDZmYTc4YmQ2MGI0NTA0Y2E0OGU2MzdhMWM5MTBkYWM0MTUzMSZjdD1n/kH84wLBChp5qd6VU2K/giphy.gif' }} style={styles.gif} />

        </View>

        <Text style={styles.perna2}> (C) PERNA (ÊNFASE POSTERIOR E GLÚTEO)</Text>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Hiperextensão lombar no solo.</Text>
          <Text style={styles.repeticoes}>4 séries com 10 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2E5NjQyM2NiMzZjOTMwMTZiOWEzNmI4MjIyZDYyZTU2ZGI0YzBjMCZjdD1n/Utlq6Aua45E5kyNfzB/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Elevação pélvica no solo.</Text>
          <Text style={styles.repeticoes}>4 séries com 10 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTZjN2RiYjdkYzY3NmU2OTM5ZDFhOWE5YjYwODg4NDA2ZDcwZDNlNyZjdD1n/yLN7ShTaHiJm8ZdFeR/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Cadeira abdutora.</Text>
          <Text style={styles.repeticoes}>4 séries com drop set.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGQ5OGFiZGUzZWE0MzIwM2ZjODZmZjI2OTA3MTcxOTY4Y2FmNTYwMSZjdD1n/M52UFqGWAus71P7Iaw/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Agachamento sumo com halter.</Text>
          <Text style={styles.repeticoes}>4 séries com 15 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWRkNzYwZWUzZDMyZDYzZWRiNDZiMTI3NGE1MDc0ZGY5YTM3YTM0ZCZjdD1n/utQDwWojG9lvYCuRFi/giphy.gif' }} style={styles.gif} />

        </View>

         <View style={styles.container2}>

          <Text style={styles.detailsText}>Stiff com barra W.</Text>
          <Text style={styles.repeticoes}>4 séries com 15 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2EyM2VlYTgyYjgyMzExNjMyNWQyNGYzNmQ1Y2I5Zjk5NmJmZTY2MyZjdD1n/fU9XTbPsC4I2Yp4wg3/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Cadeira flexora.</Text>
          <Text style={styles.repeticoes}>4 séries com 10 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODlhMWE0NWJiMzI1NDA2YmNjNjU2NDRhZTBkOWY2YTNlMTJjMjNjMyZjdD1n/lb8HA1JYACcywckUTi/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>BI-SET: Glúteo na polia com perna estendida + glúteo na polia.</Text>
          <Text style={styles.repeticoes}>3 séries com 15 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTBiZWJlY2Y0YmNhNTA5ZTdkOGZiMzRhMTEwMDk1OTM2NTY1YjA4NSZjdD1n/qv0Ht1c6kKrYRK0m7F/giphy-downsized-large.gif' }} style={styles.gif} />
          
        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Cardio.</Text>
          <Text style={styles.repeticoes}>Bicicleta 20min.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/ViMvGT3vy0ZerBxwKY/giphy.gif' }} style={styles.gif} />

        </View>

        <Text style={styles.perna2}>(D) CARDIOVASCULAR E ABDÔMEN</Text>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Abdominal supra solo.</Text>
          <Text style={styles.repeticoes}>4 séries com 10 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDE1MzA5OTE2Nzg3NzEyYzhkY2E5MTRhOWE1YzEzYTU4N2YwNGI1OSZjdD1n/vxF9YSeyCJn7QHrB1I/giphy.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Abdominal infra solo.</Text>
          <Text style={styles.repeticoes}>4 séries com 10 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2U1YjM5ZWFjY2FjZTE0MDM5ZWYzMWUxNTNmZDQ1N2EyZWRkYzVlYSZjdD1n/NbdlXO7ViOmIO2svzq/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Cardio.</Text>
          <Text style={styles.repeticoes}>Elíptico 20min.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/QI6qYrlOUVSjsACygw/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Cardio.</Text>
          <Text style={styles.repeticoes}>Esteira 20min.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGRhMDZmYTc4YmQ2MGI0NTA0Y2E0OGU2MzdhMWM5MTBkYWM0MTUzMSZjdD1n/kH84wLBChp5qd6VU2K/giphy.gif' }} style={styles.gif} />

        </View>

        <Text style={styles.finalizar}>Ao finalizar o 4° dia (treino D) você deverá retornar e fazer o treino (A) no dia seguinte e assim por diante.</Text>


        </ScrollView>
      )}

      {workoutType === 'legs' && (
         <ScrollView contentContainerStyle={styles.perna} showsVerticalScrollIndicator={false} >

          <Text style={styles.perna2}>PERNA E CORE</Text>

          <View style={styles.container2}>

            <Text style={styles.detailsText}>Cadeira Abdutora.</Text>
            <Text style={styles.repeticoes}>3 séries com rest pause.</Text>
            <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2VhMjJiZWM5ZGZhNDM1MzA3ZDI2ZDI4MjRlZDRlYjMzZjVhMjgzYyZjdD1n/ZVGKUZNNae2lHtktQ6/giphy-downsized-large.gif' }} style={styles.gif} />

          </View>

          <View style={styles.container2}>

            <Text style={styles.detailsText}>Agachamento no Smith</Text>
            <Text style={styles.repeticoes}>1x20 (Série de aquecimento, peso leve) 1x12 (peso  médio 1x10 (peso médio++) 1x8 (peso máximo).</Text>
            <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDhkY2MyODE5NzljNDE2ZDhmYzEyNjExYmQ1Mzk2YWQyNWI5NDQ3MCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/gqvHPIjckUrBkKgZnO/giphy-downsized-large.gif' }} style={styles.gif} />

          </View>

          <View style={styles.container2}>

            <Text style={styles.detailsText}>Leg press 45</Text>
            <Text style={styles.repeticoes}>1x20 (Série de aquecimento, peso leve) 1x12 (peso médio) 1x10 (peso médio++) 1x8 (peso máximo)</Text>
            <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2IzN2I3OGMwYWJlYjIyMmJhYzM0NTQyNGY4NjI1NjIxYjNiYzNlNyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/wToUSm6KKW5SNrHVit/giphy-downsized-large.gif' }} style={styles.gif} />

          </View>

          <View style={styles.container2}>

            <Text style={styles.detailsText}>Levantamento terra sumo.</Text>
            <Text style={styles.repeticoes}>4x10 (Você deverá sempre manter o seu bumbum acima do joelho durante o movimento).</Text>
            <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTBiMTZkZjBiZmE0OWQzNDMzMzY0NWE1OTkwN2FjOWM3YzY1Yjc3MiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/J5qCGBU2pvlYaJWS0Z/giphy-downsized-large.gif' }} style={styles.gif} />

          </View>

           <View style={styles.container2}>

            <Text style={styles.detailsText}>Cadeira Extensora.</Text>
            <Text style={styles.repeticoes}>1x20 (Série de aquecimento, peso leve) 1x12 (peso médio) 1x10 (peso médio++) 1x8 (peso máximo).
            Na ultima série, executar as 8 repetições e dropar os pesos até a falha 3 vezes.
            </Text>
            <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjNhMmZlZGZiOTk3NTM1NWMwNjhhZjVlYjk3NDlkNDZkYWI2YmNmYSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/9Quy4KIJ3TOapRkD5k/giphy-downsized-large.gif' }} style={styles.gif} />

          </View>

          <View style={styles.container2}>

            <Text style={styles.detailsText}>Passada.</Text>
            <Text style={styles.repeticoes}>2 minutos contínuos.</Text>
            <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjk1OWM2ZTY0MjYzMGM5ZGRiMWE0YzM0Yzg4ZmRhMjAwNDNhY2E2NCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/9mdo3PtIMwJZwgFoVM/giphy-downsized-large.gif' }} style={styles.gif} />

          </View>

          <View style={styles.container2}>

            <Text style={styles.detailsText}>Prancha Isométrica.</Text>
            <Text style={styles.repeticoes}>4 séries de 1 minuto.</Text>
            <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWRjN2Y3NDU5MzA4NjQ3ZWRiZDg0ZDdkNmVhZTJiMTQxYzEyZWVkMiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/WQwNHk8nXUURgs0Q7p/giphy.gif' }} style={styles.gif} />

          </View>

          <View style={styles.container2}>

            <Text style={styles.detailsText}>Cardiovascular.</Text>
            <Text style={styles.repeticoes}>Esteira com elevação máxima 25min.</Text>
            <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGRhMDZmYTc4YmQ2MGI0NTA0Y2E0OGU2MzdhMWM5MTBkYWM0MTUzMSZjdD1n/kH84wLBChp5qd6VU2K/giphy.gif' }} style={styles.gif} />

          </View>

        </ScrollView>
      )}
      {workoutType === 'biceps' && (
        <ScrollView contentContainerStyle={styles.perna} showsVerticalScrollIndicator={false}>

        <Text style={styles.perna2}>COSTAS E BÍCEPS</Text>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Puxada frente com barra romana.</Text>
          <Text style={styles.repeticoes}>1x20 (Série de aquecimento, peso leve) 1x12 (peso médio) 1x10 (peso médio++) 1x8 (peso máximo).</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzVhNmQyNGMzYzkyMTlkN2IyMzNiNDEyZjdiOGVhMzM1ZDI1Y2NjZiZjdD1n/MrWS80mufwp50eLVZU/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Puxada frente com pegada inversa.</Text>
          <Text style={styles.repeticoes}>3 séries com rest pause.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDkxMDQxMTkyY2E3Y2VkYWM5NjI1NzUxYTBiN2Q5N2M4ZTc4OTgyNiZjdD1n/5eeHltVt9XNkOpwzcj/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Remada baixa com triangulo.</Text>
          <Text style={styles.repeticoes}>1x20 (Série de aquecimento, peso leve) 1x12 (peso médio) 1x10 (peso médio++) 1x8 (peso máximo).</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGJkOTkyYTg4NTdhYjVmNjQ0MTliNmI5NDBmM2MwMmZmYTA5MDhhZCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/9o9dkkSnaettmmNeb2/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Remada cavalinho.</Text>
          <Text style={styles.repeticoes}>4 séries com 15 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDM4YmRjNmY5NWNkYTlkYjZkNTJlYzM4ZGQzMjU4MTlmZTM4YWZmOSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/X4BfwopbEkOKOobSL9/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

         <View style={styles.container2}>

          <Text style={styles.detailsText}>BI-SET Rosca direta na polia + Rosca alternada com halter.</Text>
          <Text style={styles.repeticoes}>3 séries com 15 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWIzNjRjODY3MmI3MmRjMzM0NTljZDc2NjZlMzI0MjM0OThiYjY4MSZjdD1n/7jwVkoQOxysIPJGZEe/giphy.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Abdominal supra solo.</Text>
          <Text style={styles.repeticoes}>4 séries com 15 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjY1OGQ5ODEyZjNkNzc3Y2NjNmMwMDc1MjBmZDM5OTQ2ZGM0YWNkYSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/WLRG5vmQmqzrz1xZaC/giphy.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Abdominal infra.</Text>
          <Text style={styles.repeticoes}>4 séries com 15 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGRmYThhYWYyYjFlMDg3NjEzOGYwZWFkOWMyNTBmMjU3ZDE4MDJjZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3Uewf12Lnsr3BWxqem/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Cardio.</Text>
          <Text style={styles.repeticoes}>25 min de esteira inclinada.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGRhMDZmYTc4YmQ2MGI0NTA0Y2E0OGU2MzdhMWM5MTBkYWM0MTUzMSZjdD1n/kH84wLBChp5qd6VU2K/giphy.gif' }} style={styles.gif} />

        </View>


      </ScrollView>

      )}
      {workoutType === 'chest' && (
        <ScrollView contentContainerStyle={styles.perna} showsVerticalScrollIndicator={false}>

        <Text style={styles.perna2}>PERNA 2</Text>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Cadeira extensora.</Text>
          <Text style={styles.repeticoes}>6 séries com 10 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzQ3NWQxNjE2NmEwMmVkODFkMDk3ODNjMmVmYTE4ZTRlZjg5N2VkYiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/9Quy4KIJ3TOapRkD5k/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Cadeira flexora.</Text>
          <Text style={styles.repeticoes}>1x20 (Série de aquecimento, peso leve) 1x12 (peso médio) 1x10 (peso médio++) 1x8 (peso máximo).
          Na ultima série, executar as 8 repetições e dropar os pesos até a falha 3 vezes.
          </Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGIwOWYwZGJmMmU4MDRkNmVkMTEzNGRhNzljOTVhZWFjYmU2N2MxZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/7481dge6FDMWXc8mn5/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Agachamento sumo no smith.</Text>
          <Text style={styles.repeticoes}>4 séries com 10 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzEwMzk1OWFhNDk0NWQ4NjljOTcyMGYxZTEyYTQ0YTBmMTJhMDI3ZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/nWI6W8vJ12RWZogIYu/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>BI-SET Stiff com barra + stiff com halter.</Text>
          <Text style={styles.repeticoes}>3 séries com 10 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOThlYzM5MzFhM2RkMTkxNzZlMTBhMWI5NWM1NzIyM2M2MTc0MjMwZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/2QfdiorYDi7XU4g5WK/giphy-downsized-large.gif' }} style={styles.gif} />
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2VjMTlmYTlhMzc3ZjhhZjM3YmMxN2Y1YzkyM2E5MmY1NTI3NWIxNiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/DOQDmbNrRcTZDov5tD/giphy.gif' }} style={styles.gif} />

        </View>

         <View style={styles.container2}>

          <Text style={styles.detailsText}>Elevação pélvica barra flexora.</Text>
          <Text style={styles.repeticoes}>1x20 (Série de aquecimento, peso leve) 1x12 (peso médio) 1x10 (peso médio++) 1x8 (peso máximo).</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjlhZjE5MDNjNjk2MmRhYjhjYmFiODdiZWEwYWQ3ZDk5MjczNWZlOCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/U9xq6JGtloCtt379X9/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Agachamento búlgaro.</Text>
          <Text style={styles.repeticoes}>3 séries com 8 repetições NO STOP (irá executar em sequencia e sem descanso até finalizar 3 séries em cada perna).</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGM5NjU2ZGU3ZDhmOGMxZjJlNDI1N2JiMmNhYjFhMmYyOGE5ZGM5MSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/VyVOGFJ32LwzdpUPfc/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Prancha lateral</Text>
          <Text style={styles.repeticoes}>3 séries com 40 segundos de cada lado.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWEwODJlYWFkN2E2OTU5ZTFkYjc2YWZiMTE4NzM3MjQwMzg2MTk0ZCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/jp9Yhqd6Cach9ZopKJ/giphy-downsized-large.gif' }} style={styles.gif} />
          
        </View>

        <View style={styles.container2}>

            <Text style={styles.detailsText}>Cardiovascular.</Text>
            <Text style={styles.repeticoes}>Esteira inclinada 25min.</Text>
            <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGRhMDZmYTc4YmQ2MGI0NTA0Y2E0OGU2MzdhMWM5MTBkYWM0MTUzMSZjdD1n/kH84wLBChp5qd6VU2K/giphy.gif' }} style={styles.gif} />

        </View>


      </ScrollView>
      )}
      {workoutType === 'back' && (
        <ScrollView contentContainerStyle={styles.perna} showsVerticalScrollIndicator={false}>

        <Text style={styles.perna2}>PEITO, OMBROS E TRÍCEPS</Text>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Supino inclinado com halter.</Text>
          <Text style={styles.repeticoes}>4 séries com 15 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmU4YjI1NWIwNGQ1MTM5MWI4NTliNTQwYTMyZjlmNTc5YjMxNWYzMiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/KI8k47j3fWtNsidrNZ/giphy.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Crucifixo inclinado com halter.</Text>
          <Text style={styles.repeticoes}>4 séries com 15 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWU2OTM0ODRiZGE1YzllOWYzNTJiYzA3ODhlZjE0NDk3M2ZlMWVjMCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/KIP1I7oNZA1PFZSoe7/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Bi-set : Triceps corda + Triceps testa corda na polia.</Text>
          <Text style={styles.repeticoes}>3 séries com 15 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmE3MDY0YWM2ZDZlMzZlNjJjM2MyMGE2NDVmMGMxMTQzOWY3ZmJiYSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/cWE3T7OjGwPWXrENWh/giphy-downsized-large.gif' }} style={styles.gif} />
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODgyZGZhNDI3ZmE3MmU3MWYzMDU3NDIyMWM1YTcxMWNjMjE0MzA1ZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/SRZ1n5YwZREz7yoHwD/giphy.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Elevação frontal.</Text>
          <Text style={styles.repeticoes}>4 séries com 15 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzEwMWI1M2MwNzYwMTkyOWNiNjViZTVjOGRjNTIzOGM0ZGE1Nzk4ZCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/WuEFRpocjwWjcA77eQ/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Drop-set Elevação lateral.</Text>
          <Text style={styles.repeticoes}>3 séries com 15-12-10 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjRmYmI3ZWZmNThhMWNiZTk4OTMyZWVkNDI5Nzk1YTVmN2M0N2EyMyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/QDwb9T43JeyWHc4o0r/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Abdominal no banco declinado.</Text>
          <Text style={styles.repeticoes}>4 séries com 15 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjdiM2IxYzY3OWM5NDU5MDYyZjMzNjY0M2Y4YjNhZDQwZDhmNzcwYyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/4ujiQDro9oGJ2LDpNX/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Abdominal máquina.</Text>
          <Text style={styles.repeticoes}>4 séries com 15 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGFkODY4MDk3MGNlMjA2ZWI1YmE0MTNlOWY5YjJhMjBhMmE5NWVmOSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/AUL1ivR4KF7xN3EsTi/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Cardiovascular.</Text>
          <Text style={styles.repeticoes}>Esteira inclinada 25min.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGRhMDZmYTc4YmQ2MGI0NTA0Y2E0OGU2MzdhMWM5MTBkYWM0MTUzMSZjdD1n/kH84wLBChp5qd6VU2K/giphy.gif' }} style={styles.gif} />

        </View>


      </ScrollView>
      
      )}

      {workoutType === 'leg' && (
        <ScrollView contentContainerStyle={styles.perna} showsVerticalScrollIndicator={false}>

        <Text style={styles.perna2}>PERNA E GLÚTEOS</Text>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Agachamento livre.</Text>
          <Text style={styles.repeticoes}>1x20 (Série de aquecimento, peso leve) 1x12 (peso médio) 1x10 (peso médio++) 1x8 (peso máximo).</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzFmYTE3YjY4ZjRjYmQzZDk3OTk4ZTg1MWRjYmRkODM2OWFlYzRhNSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/JufI0kDwdYrvcbhN87/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Elevação pélvica barra.</Text>
          <Text style={styles.repeticoes}>5 séries com 10 repetições (Contrair muuuito o glúteo ao subir).</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjBkNjkwMmZkMzljNTFhODljN2QxOTY1NDc5Yjc5ZTkyZTRmYjBmYSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/deelZLEFRhcMADOnGz/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Mesa flexora.</Text>
          <Text style={styles.repeticoes}>5 séries com 10 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmM5MmQzZjE5NjQ2Yjg4NTdjZjNjMTE2MjRlOWFkNDU3Y2U0OWNjNSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/DmseF3MQ4H4U2siYsP/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Terra sumo.</Text>
          <Text style={styles.repeticoes}>1x20 (Série de aquecimento, peso leve) 1x12 (peso médio) 1x10 (peso médio++) 1x8 (peso máximo).</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODFhZmRjMzY4MmJjNGEyMjhkYzQ0YWQ2ZDQzNTkwN2I3NjBlZmVkNSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/jCttTMWFSPYtcPlVPB/giphy.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Gluteo no cabo extendido.</Text>
          <Text style={styles.repeticoes}>3 séries com 15 repetições.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmY4ZmU2NzI2YTdiN2I2ODc0Y2UxOTg1Y2ExMjg2OTY4OWQxMTRiMyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/MJ6r6RPswaApkuOJIw/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Cadeira abdutora.</Text>
          <Text style={styles.repeticoes}>4 séries até a falha.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjY1NGUyNDllYWVjN2Y1ZDczM2U0ZmFlNWQ4NWY5MWE5NDBhYTk2NSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/g9LgxYcIHTz3Hxv1XM/giphy-downsized-large.gif' }} style={styles.gif} />

        </View>

        <View style={styles.container2}>

          <Text style={styles.detailsText}>Cardio.</Text>
          <Text style={styles.repeticoes}>Esteira inclinada 25min.</Text>
          <Image source={{ uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGRhMDZmYTc4YmQ2MGI0NTA0Y2E0OGU2MzdhMWM5MTBkYWM0MTUzMSZjdD1n/kH84wLBChp5qd6VU2K/giphy.gif' }} style={styles.gif} />

        </View>


      </ScrollView>
      
      )}

    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF1691',
  },

  container2: {
    backgroundColor: '#CE1A79',
    padding: 20,
    borderRadius: 30,
    marginBottom: 30,
  },

  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  headerText: {
    fontSize: 38,
    color: '#FFF',
    marginTop: 30,
    marginBottom: 5,
    fontWeight: '300',
  },

  headerPara: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 30,
    fontWeight: '300',
  },

  imageContainer: {
    alignItems: 'center',
    margin: 10,
  },
  
  image: {
    width: 264,
    height: 307,
    justifyContent: 'flex-end',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 2,
  },

  image1: {
    width: 200,
    height: 200,
    bottom: -20,
    alignItems: 'center',
    alignSelf: 'center',
  },

  text: {
    padding: 10,
    fontSize: 20,
    fontWeight: '400',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    textAlign: 'center',
  },

  detailsText: {
    color:'#00FF00',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  repeticoes: {
    marginTop: 10,
    color: '#FFf',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 15,
  },

  gif: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    margin: 20,
  },

  perna: {
    paddingTop: 100,
    paddingBottom: 20,
  },

  perna2: {
    color: '#FFF',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    bottom: 30,
    marginTop: 20,
  },

  botao: {
    top: 300,
    color: '#fff'
  },

  finalizar: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    color: '#FFF',
    marginBottom: 30,
    fontWeight: '300',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },

  card: {
    width: 230,
    height: 510,
    marginHorizontal: 10,
    top: 60,
    borderRadius: 10,
    backgroundColor: '#CE1A79',
    overflow: 'hidden',
  },
  image4: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 10,
  },
  title3: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
    fontWeight: 'bold',
  },
  description3: {
    marginTop: 5,
    fontSize: 14,
    color: '#fff',
    textAlign: "center",
  },
});
