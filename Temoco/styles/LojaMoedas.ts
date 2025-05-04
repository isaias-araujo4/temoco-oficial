import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        gap: 40,
        backgroundColor: "#F2F0F8",
        fontFamily: "Inter",
        padding: 20,
    },
    quantidadeMoeda: {
        alignSelf: 'flex-end',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        height: 45,
        width: 106,
    },
    boxPrecos: {
        alignItems: "center",
        justifyContent: "center",
        gap: 40
    },
    preco: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 120,
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        height: 80,
        width: 341,
    },
    temocoQuantidade: {
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    },
    textoPrecos: {
        color: "#787575",
        width: 96,
        height: 24,
        fontWeight: "bold",
    },
    textoQuantidade: {
        color: "0000000",
        fontWeight: "bold",
    },
    titulo: {
        color: 'black',
        fontSize: 24,
        fontWeight: "bold",
    },
    boxImagem: {
        alignSelf: 'flex-start',
    }
})