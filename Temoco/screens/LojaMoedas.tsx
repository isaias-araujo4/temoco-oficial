import { Image, Text, View } from "react-native";
import { styles } from "../styles/LojaMoedas";

export default function LojaMoedas() {
    return (
        <View style={styles.container}>

            <View style={styles.boxImagem}>
                <Image source={require('@/images/seta.png')} />
            </View>


            <Text style={styles.titulo}>Temocoins</Text>

            <View style={styles.quantidadeMoeda}>
                <Image source={require('@/images/coins.png')} />
                <Text style={styles.textoQuantidade}>
                    55
                </Text>
            </View>

            <View style={styles.boxPrecos}>

                <View style={styles.preco}>
                    <View style={styles.temocoQuantidade}>
                        <Image source={require('@/images/coins.png')} />
                        <Text style={styles.textoQuantidade}>6840</Text>
                    </View>
                    <Text style={styles.textoPrecos}>R$149,99</Text>
                </View>

                <View style={styles.preco}>
                    <View style={styles.temocoQuantidade}>
                        <Image source={require('@/images/coins.png')} />
                        <Text style={styles.textoQuantidade}>3520</Text>
                    </View>
                    <Text style={styles.textoPrecos}>R$ 89,99</Text>
                </View>

                <View style={styles.preco}>
                    <View style={styles.temocoQuantidade}>
                        <Image source={require('@/images/coins.png')} />
                        <Text style={styles.textoQuantidade}>1600</Text>
                    </View>
                    <Text style={styles.textoPrecos}>R$ 39,99</Text>
                </View>

                <View style={styles.preco}>
                    <View style={styles.temocoQuantidade}>
                        <Image source={require('@/images/coins.png')} />
                        <Text style={styles.textoQuantidade}>960</Text>
                    </View>
                    <Text style={styles.textoPrecos}>R$ 14,99</Text>
                </View>

                <View style={styles.preco}>
                    <View style={styles.temocoQuantidade}>
                        <Image source={require('@/images/coins.png')} />
                        <Text style={styles.textoQuantidade}>320</Text>
                    </View>
                    <Text style={styles.textoPrecos}>R$ 14,99</Text>
                </View>
            </View>
        </View >
    );
}