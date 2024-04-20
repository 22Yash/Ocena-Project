import React from "react";
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

export const BtechPDF = ({ name, date }) => {
    return (
      <Document>
        <Page style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.heading}>Ref-A101</Text>
            <Text>{'\n'}</Text>
            <Text>Name: {name}</Text>
            <Text>{'\n'}</Text>
            <Text>Course: B.tech</Text>
            <Text>{'\n'}</Text>
            <Text>Date of Offer: {date}</Text>
            <Text>{'\n'}</Text>
            <Text style={styles.heading}>Fee structure:</Text>
            <Text>{'\n'}</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Year</Text>
                <Text style={styles.tableCell}>One time Fee</Text>
                <Text style={styles.tableCell}>Tuition Fees</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>1st Year</Text>
                <Text style={styles.tableCell}>500</Text>
                <Text style={styles.tableCell}>160</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>2nd Year</Text>
                <Text style={styles.tableCell}>-</Text>
                <Text style={styles.tableCell}>160</Text>
              </View>
              
            </View>
          </View>
        </Page>
      </Document>
    );
  };


export const MtechPDF = ({ name, date }) => {
    return (
      <Document>
        <Page style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.heading}>Ref-B101</Text>
            <Text>{'\n'}</Text>
            <Text>Name: {name}</Text>
            <Text>{'\n'}</Text>
            <Text>Course: M.tech</Text>
            <Text>{'\n'}</Text>
            <Text>Date of Offer: {date}</Text>
            <Text>{'\n'}</Text>
            <Text style={styles.heading}>Fee structure:</Text>
            <Text>{'\n'}</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Year</Text>
                <Text style={styles.tableCell}>One time Fee</Text>
                <Text style={styles.tableCell}>Tuition Fees</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>1st Year</Text>
                <Text style={styles.tableCell}>500</Text>
                <Text style={styles.tableCell}>160</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>2nd Year</Text>
                <Text style={styles.tableCell}>-</Text>
                <Text style={styles.tableCell}>160</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );
  };





const styles = StyleSheet.create({

page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  section: {
    flexGrow: 1,
    marginBottom: 10,
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    textAlign: 'center',
  }
});