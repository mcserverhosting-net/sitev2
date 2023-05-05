---
title: "squid"
draft: false
category: "Economy"
weight: 5

product:
  id: "squid"
  name: "Squid"
  price: "12.50"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "10 GiB"

    - name: "STORAGE"
      type: "readonly"
      value: "100 GiB"

    - name: "nodemodel"
      type: "hidden"
      value: "m1"

    - name: "DATABASES"
      type: "readonly"
      value: 2

    - name: "SNAPSHOTS"
      type: "readonly"
      value: 10
      
    - name: "PANEL USERS"
      type: "readonly"
      value: 10
      
    - name: "SERVER TYPE"
      options: "vanilla|paper|fabric|spongevanilla|forge"


  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 12.50
---